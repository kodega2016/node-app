const User = require("../models/user");

exports.getAll = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    data: users,
    message: "users fetched successfully",
  });
};

exports.create = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({
    data: user,
    message: "user created successfully",
  });
};
