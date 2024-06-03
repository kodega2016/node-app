const express = require("express");
const app = express();

// setup express body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setup app routes
const usersRoutes = require("./routes/users");
app.use("/api/users", usersRoutes);

module.exports = { app };
