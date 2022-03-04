require("dotenv").config();
require("express-async-errors");
require("colors");
const cors = require("cors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");

// error handler
const notFoundMiddleware = require("./middlewares/notFound");
const errorHandlerMiddleware = require("./middlewares/errorHandler");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// routes
app.use("/api/posts", require("./routes/postRoute"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    connectDB();
    app.listen(port, () => {
      console.log(`server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
