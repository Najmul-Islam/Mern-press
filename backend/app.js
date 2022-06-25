require("dotenv").config();
require("colors");
const path = require("path");
const cors = require("cors");

const express = require("express");
const app = express();
const { errorHandler } = require("./middlewares/errorHandler");
const connectDB = require("./db/connect");

// middleware
app.use(express.static(path.join(__dirname, "public")));
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
app.use("/api/media", require("./routes/mediaRoute"));
app.use("/api/categories", require("./routes/categoryRoute"));
app.use("/api/tags", require("./routes/tagRoute"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

// error middleware
app.use(errorHandler);

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
