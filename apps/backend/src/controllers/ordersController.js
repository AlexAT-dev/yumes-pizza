const { v4: uuidv4 } = require('uuid');
const ordersModel = require('../models/ordersModel');

async function createOrder(req, res) {
  const order = { ...req.body, id: uuidv4() };

  try {
    await ordersModel.createOrderWithTransaction(order);
    res.status(200).json({
      id: order.id,
      message: 'Order created successfully',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      id: null,
      message: 'Error creating order',
    });
  }
}

async function getOrders(req, res) {
  const id_client = req.query.id_client;

  try {
    const orders = await ordersModel.getOrdersByClient(id_client);
    res.status(200).json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json([]);
  }
}

module.exports = {
  createOrder,
  getOrders,
};

