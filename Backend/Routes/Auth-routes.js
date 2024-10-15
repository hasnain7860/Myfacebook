const express = require("express");
const User = require("../model/user-schema");

const router = express.Router();

router.route("/signup").post(async (req, res) => {
  try {
    const { firstName, lastName, username, email, password, gender,birthday} = req.body;

    // Check if the user already exists
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const createdUser = await User.create({
      username,
      email,
      passwordHash: password, // Ideally, you should hash the password before saving
      profile: { firstName, lastName, gender,birthday }
    });

    // Send success response with 201 status code
    res.status(201).json({
      message: "User created successfully",
      user: createdUser
    });
  } catch (error) {
    // Send 500 status code for server error
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
