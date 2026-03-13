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

module.exports = {
  getNews,
};

