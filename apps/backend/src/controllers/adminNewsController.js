const { v4: uuidv4 } = require('uuid');
const model = require('../models/adminNewsModel');

async function getAllNews(req, res) {
  try {
    const data = await model.getAll();
    return res.json({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: { code: 'INTERNAL_ERROR', message: 'Failed to fetch news' },
    });
  }
}

async function createNews(req, res) {
  try {
    const payload = { ...req.body, id: req.body.id || uuidv4() };
    const data = await model.create(payload);
    return res.status(201).json({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: { code: 'INTERNAL_ERROR', message: 'Failed to create news' },
    });
  }
}

async function updateNews(req, res) {
  try {
    const data = await model.updateById(req.params.id, req.body);
    if (!data) {
      return res.status(404).json({
        error: { code: 'NOT_FOUND', message: 'News not found' },
      });
    }
    return res.json({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: { code: 'INTERNAL_ERROR', message: 'Failed to update news' },
    });
  }
}

async function deleteNews(req, res) {
  try {
    const removed = await model.removeById(req.params.id);
    if (!removed) {
      return res.status(404).json({
        error: { code: 'NOT_FOUND', message: 'News not found' },
      });
    }
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: { code: 'INTERNAL_ERROR', message: 'Failed to delete news' },
    });
  }
}

module.exports = {
  getAllNews,
  createNews,
  updateNews,
  deleteNews,
};
