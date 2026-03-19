const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authModel = require('../models/authModel');

const JWT_SECRET = process.env.JWT_SECRET || 'change-me-in-env';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

function signToken(user) {
  return jwt.sign(
    {
      sub: user.id,
      email: user.email,
      isAdmin: Boolean(user.is_admin),
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN },
  );
}

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
    const hash = await bcrypt.hash(password, 10);
    await authModel.createClient({ id, name, phone, email, password: hash });

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
    const user = await authModel.findClientByEmailWithPassword(email);
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid email or password' });
    }

    // Backward compatible login for older non-hashed records.
    const isHashValid = await bcrypt.compare(password, user.password).catch(
      () => false,
    );
    const isLegacyPlainPassword = user.password === password;
    if (!isHashValid && !isLegacyPlainPassword) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid email or password' });
    }

    const token = signToken(user);
    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        isAdmin: Boolean(user.is_admin),
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

