module.exports = {
  PORT: process.env.PORT || 3000,
  // MONGO_URI: `mongodb://host.docker.internal:27017/express-mongo`,
  MONGO_URI: `mongodb://172.17.0.2:27017/express-mongo`,
  //   MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/express-mongo",
};
