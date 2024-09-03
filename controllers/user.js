const asyncHandler = require("express-async-handler");
const { userModel } = require("../models/user.js");

//NOTE - getAllusers
const getAllusers = asyncHandler(async (req, res) => {
  const users = await userModel.find({});
  res.send(users);
});
//NOTE - getuserByid
const getUserById = asyncHandler(async (req, res) => {
  const id = req.params.userId;
  const users = await userModel.findById(id);
  res.send(users);
});

//NOTE - getTweetbyId
const getTweetsByUserId = asyncHandler(async (req, res) => {
  const id = req.params.userId;
  const users = await userModel.findById(id).populate("tweets").exec();
  res.send(users);
});
//NOTE - createUser
const createUser = asyncHandler(async (req, res) => {
  const { username, email, dateOfBirth } = req.body;
  const parsedDate = Date.parse(dateOfBirth);
  const newUser = new userModel({
    username,
    email,
    dateOfBirth: parsedDate,
  });
  const result = await newUser.save();
  res.send(result);
});
//NOTE - updateuser
const updateUser = asyncHandler(async (req, res) => {
  const id = req.params.userId;
  const update = await userModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.send(update);
});
//NOTE - deleteUser
const deleteUser = asyncHandler(async (req, res) => {
  const id = req.params.userId;
  const result = await userModel.findByIdAndDelete(id);
  res.send(result);
});
module.exports = {
  getAllusers,
  getUserById,
  getTweetsByUserId,
  createUser,
  updateUser,
  deleteUser,
};
