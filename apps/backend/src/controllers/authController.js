const { v4: uuidv4 } = require('uuid');
const authModel = require('../models/authModel');

async function registerUser(req, res) {
  const { name, phone, email, password } = req.body;

  try {
    const existing = await authModel.findClientByEmail(email);
    if (existing) {
      return res
        .status(400)
        .json({ success: false, message: 'User already exists' });
    }

    const id = uuidv4();
    await authModel.createClient({ id, name, phone, email, password });

    res
      .status(200)
      .json({ success: true, message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: `Database error (${err.message})` });
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await authModel.findClientByCredentials(email, password);
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid email or password' });
    }

    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        address: {
          street: user.street,
          building: user.building,
          appart: user.appart,
          floor: user.floor,
          entrance: user.entrance,
          intercom: user.intercom,
        },
      },
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: 'Internal server error' });
  }
}

module.exports = {
  registerUser,
  loginUser,
};

