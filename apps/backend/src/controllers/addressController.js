const addressModel = require('../models/addressModel');

async function createAddress(req, res) {
  const { id_order, street, building, appart, floor, entrance, intercom } =
    req.body;

  try {
    const existing = await addressModel.getAddressByOrderId(id_order);

    if (!existing) {
      await addressModel.createAddress({
        id_order,
        street,
        building,
        appart,
        floor,
        entrance,
        intercom,
      });
      res.status(201).send('Address created successfully');
    } else {
      res.status(400).send('Address already exists');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
}

async function getAddressByOrderId(req, res) {
  try {
    const address = await addressModel.getAddressByOrderId(req.params.id_order);
    if (!address) {
      return res.status(404).json({
        error: { code: 'NOT_FOUND', message: 'Address not found' },
      });
    }
    return res.status(200).json(address);
  } catch (err) {
    console.error(err);
    return res.status(500).send(err.message);
  }
}

module.exports = {
  createAddress,
  getAddressByOrderId,
};

