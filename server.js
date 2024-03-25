const express = require("express");
const app = express();
const userRouter = require("./routes/user.js");
const tweetRouter = require("./routes/tweet.js");
const dbconnect = require("./db/db.js");
const port = 3000;
//var bodyParser = require("body-parser");
// NOTE app.use(bodyParser.json())

dbconnect().catch((err) => {
  console.log(err);
});

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/tweets", tweetRouter);

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
//app.use(bodyParser.json());
