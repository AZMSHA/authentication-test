const User = require("../model/User");
const bcrypt = require("bcryptjs");

exports.register = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    // Hash the password
    const hash = await bcrypt.hash(password, 10);

    // Create a new user with hashed password
    const user = await User.create({
      username,
      password: hash,
    });

    // Return success response
    res.status(200).json({
      message: "User successfully created",
      user,
    });
  } catch (error) {
    // Return error response
    res.status(400).json({
      message: "User not successfully created",
      error: error.message,
    });
  }
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  // Check if username and password are provided
  if (!username || !password) {
    return res.status(400).json({
      message: "Username or Password not present",
    });
  }

  try {
    const user = await User.findOne({ username });

    // If user not found, return error
    if (!user) {
      return res.status(400).json({
        message: "Login not successful",
        error: "User not found",
      });
    }

    // Compare given password with hashed password
    const result = await bcrypt.compare(password, user.password);

    if (result) {
      // If password is correct, return success
      return res.status(200).json({
        message: "Login successful",
        user,
      });
    } else {
      // If password is incorrect, return error
      return res.status(400).json({ message: "Password Incorrect" });
    }
  } catch (error) {
    // If any error occurs during the process, return error
    return res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

exports.update = async (req, res, next) => {
  const { role, id } = req.body;

  try {
    // Verify if role and id are present
    if (!role || !id) {
      return res.status(400).json({ message: "Role and ID are required" });
    }

    // Verify if the value of role is admin
    if (role !== "admin") {
      return res
        .status(400)
        .json({ message: "Role must be 'admin' to update user role" });
    }

    // Find the user by id
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify the user is not already an admin
    if (user.role === "admin") {
      return res.status(400).json({ message: "User is already an Admin" });
    }

    // Update user role
    user.role = role;
    await user.save();

    res.status(201).json({ message: "Update successful", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.body;

    // Find user by ID
    const user = await User.findById(id);

    // If user not found, return 404
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete user directly from database
    await User.deleteOne({ _id: id });

    // Return success message
    res.status(200).json({ message: "User successfully deleted", user });
  } catch (error) {
    // If any error occurs during the process, return 400 with error message
    res
      .status(400)
      .json({ message: "An error occurred", error: error.message });
  }
};
