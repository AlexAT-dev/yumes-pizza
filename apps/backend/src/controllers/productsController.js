const productsModel = require('../models/productsModel');

async function getProducts(req, res) {
  try {
    const products = await productsModel.getAllProducts();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json([]);
  }
}

async function getGroupedProducts(req, res) {
  try {
    const grouped = await productsModel.getGroupedProducts();
    res.json(grouped);
  } catch (error) {
    console.error(error);
    res.status(500).json([]);
  }
}

module.exports = {
  getProducts,
  getGroupedProducts,
};

