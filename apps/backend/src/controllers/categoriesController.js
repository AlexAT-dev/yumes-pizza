const categoriesModel = require('../models/categoriesModel');

async function getCategories(req, res) {
  try {
    const categories = await categoriesModel.getAllCategories();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json([]);
  }
}

module.exports = {
  getCategories,
};

