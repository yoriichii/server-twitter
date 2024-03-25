const express = require("express");
const userRouter = express.Router();
const {
  getAllusers,
  getUserById,
  getTweetsByUserId,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.js");
const { createUserValidator } = require("../validators/index.js");
const { handleValidation } = require("../middleware/index.js");
userRouter.get("/", getAllusers);
userRouter.get("/:userId", getUserById);
userRouter.get("/:userId/tweets", getTweetsByUserId);
userRouter.post("/", createUserValidator, handleValidation, createUser);
userRouter.delete("/:userId", deleteUser);
userRouter.put("/:userId", updateUser);

module.exports = userRouter;
