const express = require("express");
const app = express();
const userRouter = require("./routes/user.js");
const tweetRouter = require("./routes/tweet.js");
const dbconnect = require("./db/db.js");
const port = 3000;
const compression = require("compression");
const morgan = require("morgan");
const responseTime = require("response-time");
const timeout = require("connect-timeout");
const helmet = require("helmet");
require("dotenv").config();
//NOTE  bodyParser => catch req body from client and give obj body in req
//const bodyParser = require("body-parser");

dbconnect().catch((err) => {
  console.log(err);
});
//NOTE morgan => see output from req (logger)
app.use(morgan("common"));
//NOTE compression => client data will small
app.use(compression());
//NOTE responseTime => record responseTime to see your performance server
app.use(responseTime());
app.use(express.json());
//NOTE helmet => security
app.use(helmet());
//NOTE timeout => timeout of any req if error
app.use(timeout("5s"));
app.use("/api/users", userRouter);
app.use("/api/tweets", tweetRouter);
//app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
