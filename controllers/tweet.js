const { tweetModel } = require("../models/tweet.js")
//NOTE - getTweetsbyid
const getTweetById = async (req, res) => {
    const id = req.params.id
    let tweet 
    try{
        tweet = await tweetModel.findById(id)
    }catch(err){
        console.log(err);
        return res.status(404).json({ error: 'Not found' })
    }
    res.send(tweet)
}
// NOTE - getAllTweets
const getAllTweets = async(req,res) =>{
     const tweets = await tweetModel.find({}) 
     res.send(tweets)
}
// NOTE - create Tweet
const createTweet = async(req,res) =>{
    const {text} = req.body
    console.groupEnd(req.user);
    const newTweet = new tweetModel({
        text:text,
        byUser: req.user.id,
        createdDate: Date.now()
    })
    const result = await newTweet.save()
    res.send(result)
}
module.exports = { getTweetById,getAllTweets,createTweet }