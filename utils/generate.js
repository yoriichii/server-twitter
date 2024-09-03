const { faker } = require("@faker-js/faker");
const { userModel } = require("../models/user.js");
const { tweetModel } = require("../models/tweet.js");
const users = 100;
const tweets = 1000;

const dbconnect = require("../db/db.js");

dbconnect().catch((err) => {
  console.log(err);
});

async function generate() {
  let userList = [];
  for (let i = 0; i < users; i++) {
    console.log(faker.internet.userName());
    let user = new userModel({
      email: faker.internet.email(),
      username: faker.internet.userName(),
      dateOfBirth: faker.date.birthdate(),
      //password: faker.internet.password(),
    });
    const result = await user.save();
    userList.push(result._id);
    console.log(`user: ${result._id} generated!`);
  }

  //NOTE - tweets

  for (let i = 0; i < tweets; i++) {
    const randomIndex = Math.floor(Math.random() * userList.length);
    let tweet = new tweetModel({
      text: faker.lorem.paragraph(),
      byUser: userList[randomIndex],
      createdDate: new Date(),
    });
    const result = await tweet.save();
    console.log(`tweet: ${result._id} generated!`);
  }
}

generate();
