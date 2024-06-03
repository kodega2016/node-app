const { MONGO_URI, PORT } = require("./config/config");
const mongoose = require("mongoose");
const { app } = require("./app");

const start = async () => {
  if (!MONGO_URI) {
    throw new Error("MONGO_URI is missing in config/config.js");
  }

  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);

    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

start();
