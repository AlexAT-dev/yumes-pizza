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

async function getProductById(req, res) {
  try {
    const { productId } = req.params;
    const product = await productsModel.getProductById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  getProducts,
  getGroupedProducts,
  getProductById,
};

