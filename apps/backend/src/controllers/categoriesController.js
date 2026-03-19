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

async function getCategoryById(req, res) {
  try {
    const category = await categoriesModel.getCategoryById(req.params.id);
    if (!category) {
      return res.status(404).json({
        error: { code: 'NOT_FOUND', message: 'Category not found' },
      });
    }
    return res.json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json([]);
  }
}

module.exports = {
  getCategories,
  getCategoryById,
};

