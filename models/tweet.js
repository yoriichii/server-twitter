const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tweetShcema = new Schema({
     text:{type: String, require: true},
     byUser:{type:mongoose.Types.ObjectId,ref: 'users'},
     createdDate:{type:Date,require:true}
});
const tweetModel = mongoose.model("tweets", tweetShcema);
module.exports = {
  tweetShcema,
  tweetModel,
};
