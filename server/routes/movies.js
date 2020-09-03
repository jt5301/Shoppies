const express = require("express");
const router = express.Router();
const axios = require('axios')

const omdbRootUrl = 'http://www.omdbapi.com/?'
const apiKey = `&apikey=${process.env.OMDBKey}`//enter key here
router.get("/welcome", async (req, res, next) => {
  const searchTerm = req.body.searchTerm
  const movie = await axios.get(omdbRootUrl + `s=whatever&type=movie` + apiKey)
  res.status(200).json(movie.data);
});

module.exports = router;
