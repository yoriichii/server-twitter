const { tweetModel } = require("../models/tweet.js");
const asyncHandler = require("express-async-handler");
//NOTE - getTweetsbyid
const getTweetById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  let tweet;
  try {
    tweet = await tweetModel.findById(id).populate({
      path: "byUser",
      select: "username",
    });
  } catch (err) {
    console.log(err);
    return res.status(404).json({ error: "Not found" });
  }
  res.send(tweet);
});
// NOTE - getAllTweets
const getAllTweets = asyncHandler(async (req, res) => {
  const tweets = await tweetModel.find({});
  res.send(tweets);
});
// NOTE - create Tweet
const createTweet = asyncHandler(async (req, res) => {
  const { text } = req.body;
  console.groupEnd(req.user);
  const newTweet = new tweetModel({
    text: text,
    byUser: req.user.id,
    createdDate: Date.now(),
  });
  const result = await newTweet.save();
  res.send(result);
});
//NOTE - updateTweet
const updateTweet = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const update = await tweetModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.send(update);
});
//NOTE - deleteTweet
const deleteTweet = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await tweetModel.findByIdAndDelete(id);
  res.send(result);
});
module.exports = {
  getTweetById,
  getAllTweets,
  createTweet,
  deleteTweet,
  updateTweet,
};
