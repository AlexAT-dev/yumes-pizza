const model = require('../models/adminCategoriesModel');

async function getAllCategories(req, res) {
  try {
    const data = await model.getAll();
    return res.json({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: { code: 'INTERNAL_ERROR', message: 'Failed to fetch categories' },
    });
  }
}

async function getCategoryById(req, res) {
  try {
    const data = await model.getById(req.params.id);
    if (!data) {
      return res.status(404).json({
        error: { code: 'NOT_FOUND', message: 'Category not found' },
      });
    }
    return res.json({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: { code: 'INTERNAL_ERROR', message: 'Failed to fetch category' },
    });
  }
}

async function createCategory(req, res) {
  try {
    const data = await model.create(req.body);
    return res.status(201).json({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: { code: 'INTERNAL_ERROR', message: 'Failed to create category' },
    });
  }
}

async function updateCategory(req, res) {
  try {
    const data = await model.updateById(req.params.id, req.body);
    if (!data) {
      return res.status(404).json({
        error: { code: 'NOT_FOUND', message: 'Category not found' },
      });
    }
    return res.json({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: { code: 'INTERNAL_ERROR', message: 'Failed to update category' },
    });
  }
}

async function deleteCategory(req, res) {
  try {
    const removed = await model.removeById(req.params.id);
    if (!removed) {
      return res.status(404).json({
        error: { code: 'NOT_FOUND', message: 'Category not found' },
      });
    }
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: { code: 'INTERNAL_ERROR', message: 'Failed to delete category' },
    });
  }
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
