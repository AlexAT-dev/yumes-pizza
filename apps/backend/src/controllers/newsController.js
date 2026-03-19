const newsModel = require('../models/newsModel');

async function getNews(req, res) {
  try {
    const news = await newsModel.getAllNews();
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json([]);
  }
}

async function getNewsById(req, res) {
  try {
    const item = await newsModel.getNewsById(req.params.id);
    if (!item) {
      return res.status(404).json({
        error: { code: 'NOT_FOUND', message: 'News not found' },
      });
    }
    return res.json(item);
  } catch (error) {
    console.error(error);
    return res.status(500).json([]);
  }
}

module.exports = {
  getNews,
  getNewsById,
};

