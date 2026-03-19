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

async function getProductById(req, res) {
  try {
    const product = await productsModel.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({
        error: { code: 'NOT_FOUND', message: 'Product not found' },
      });
    }
    return res.json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json([]);
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
  getProductById,
  getGroupedProducts,
};

