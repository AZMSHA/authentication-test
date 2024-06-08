const Mongoose = require("mongoose");

const localDB = `mongodb://localhost:27017/role_auth`;

async function connectDB() {
  try {
    await Mongoose.connect(localDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
  }
}

connectDB();
module.exports = connectDB;
