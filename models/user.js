const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userShcema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, require: true, unique: true },
  dateOfBirth: Date,
  password: String,
  followers: [{ type: mongoose.Types.ObjectId, ref: 'users' }],
  followings: [{ type: mongoose.Types.ObjectId, ref: 'users' }],
  tweets: [{ type: mongoose.Types.ObjectId, ref: "tweets" }],
});
const userModel = mongoose.model("users", userShcema);
module.exports = {
  userShcema,
  userModel,
};
