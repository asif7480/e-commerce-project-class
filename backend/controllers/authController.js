const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

// REGISTER controller
const register = asyncHandler(async (request, response) => {
  const { name, email, password, phone, address } = request.body;
  if (!name || !email || !password || !phone || !address) {
    response.status(400);
    throw new Error("All input fields are required");
  }

  // check for existing user
  const user = await User.findOne({ email });
  if (user) {
    response.status(400);
    throw new Error("User already exists");
  }

  // registering a user
  const hashPassword = await bcrypt.hash(password, 10);

  // saving user in database
  const newUser = await User.create({
    name,
    email,
    phone,
    address,
    password: hashPassword,
  });

  response.status(201).json(newUser);
});

//LOGIN controller
const login = asyncHandler(async (request, response) => {
  const { email, password } = request.body;

  if (!email || !password) {
    response.status(400);
    throw new Error("Input all email and password");
  }

  // check user is avaiable or not
  const user = await User.findOne({ email });
  if (!user) {
    response.status(400);
    throw new Error("User not found. Please registered");
  }

  // compare password
  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    response.status(400);
    throw new Error("Invalid Password");
  }

  // create a jwt token

  const token = await JWT.sign({ id: user._id }, process.env.SECRET_KEY, {
    expiresIn: "5m",
  });

  response.status(200).json({
    message: "login successfully",
    email: user.email,
    role: user.role,
    token,
  });
});

const currentUser = asyncHandler(async (request, response) => {
  const user = await User.findById(request.user._id).select("-password");

  response.status(200).json(user);
});

const currentAdmin = asyncHandler(async (request, response) => {
  const admin = await User.findById(request.user._id).select("-password");

  response.status(200).json(admin);
});

module.exports = {
  register,
  login,
  currentUser,
  currentAdmin,
};
