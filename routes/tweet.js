const express = require('express')
const tweetRoute = express.Router()
const { getAllTweets,getTweetById,createTweet } = require("../controllers/tweet.js")

tweetRoute.get('/',getAllTweets)

tweetRoute.get('/:id', getTweetById)

tweetRoute.post('/',createTweet)

tweetRoute.delete('/:userId', (req, res) => {
    res.send('Hello World 2!')
})

tweetRoute.put('/:userId', (req, res) => {
    res.send('Hello World 2!')
})

module.exports = tweetRoute