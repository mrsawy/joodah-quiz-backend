const express = require("express");
var cors = require("cors");
var path = require("path");
require("dotenv").config();
require("colors");

const mainApiRoute = require("./routes/index");
//
const db = require("./database/config");
const { notFound, errorHandler } = require("./utils/errorHandler");

const app = express();
const { PORT = 3000 } = process.env;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

app.use(`/static`, express.static(path.join(__dirname, "static")));
app.use(`/uploads`, express.static(path.join(__dirname, "uploads")));

//
// app.get(`/uploads`, (req, res) => {
//   res.sendFile(path.join(__dirname, "front-build", "index.html"));
// });
app.use("/api", mainApiRoute);

// app.get(`/convince-test`, (req, res) => {
//   res.sendFile(path.join(__dirname, "convince-test", "index.html"));
// });

app.get(`/quiz`, (req, res) => {
  res.sendFile(path.join(__dirname, "quiz-front", "index.html"));
});
app.get(['/dashboard', '/dashboard/*'], (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard-front", "index.html"));
});

// ____________________
// app.get(`/dashboard`, (req, res, next) => {
//   res.sendFile(path.join(__dirname, "front-convince", "index.html"));
// });
// app.get(`/dashboard/*`, (req, res, next) => {
//   res.sendFile(path.join(__dirname, "front-convince", "index.html"));
// });

// });

app.use(notFound);
app.use(errorHandler);
console.log(`App started`.yellow.bold);
db.then(() => {
  console.log(`Data base connected`.green.bold);

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`.white.bgGreen);
  });
}).catch((err) => {
  console.log(err);
});
