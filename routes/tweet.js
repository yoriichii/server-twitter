const express = require("express");
const tweetRoute = express.Router();
const {
  getAllTweets,
  getTweetById,
  createTweet,
  deleteTweet,
  updateTweet,
} = require("../controllers/tweet.js");

tweetRoute.get("/", getAllTweets);

tweetRoute.get("/:id", getTweetById);

tweetRoute.post("/", createTweet);

tweetRoute.delete("/:id", deleteTweet);

tweetRoute.put("/:id", updateTweet);

module.exports = tweetRoute;
