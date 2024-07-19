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
app.use(express.static(path.join(__dirname, "front-convince")));
app.use(express.static(path.join(__dirname, "front-convince")));
app.use(express.static(path.join(__dirname, "front-build")));
app.use(express.static(path.join(__dirname, "convincestatic")));

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

app.use("/api", mainApiRoute);
app.use(`/uploads`, express.static(path.join(__dirname, "uploads")));
// app.get(`/uploads`, (req, res) => {
//   res.sendFile(path.join(__dirname, "front-build", "index.html"));
// });
// convince-quiz
app.get(`/convince-quiz`, (req, res) => {
  res.sendFile(path.join(__dirname, "convince-quiz", "index.html"));
});
// ____________________
// app.get(`*`, (req, res) => {
//   const fullUrl = req.protocol + "://" + req.hostname + req.originalUrl;
//   console.log({ fullUrl });
//   if (fullUrl.includes(`convince`)) {
//     res.sendFile(path.join(__dirname, "front-convince", "index.html"));
//   } else if (fullUrl.includes(`dashboard`)) {
//     res.sendFile(path.join(__dirname, "front-build", "index.html"));
//   } else {
//     next();
//   }
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
