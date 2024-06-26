const express = require("express");
const connectDB = require("./db");

//Connecting the Database
connectDB();

const app = express();
app.use(express.json());
app.use("/api/auth", require("./auth/Route"));
app.use(express.static("public"));

app.use((req, res, next) => {
  if (req.url.endsWith(".js")) {
    res.type("application/javascript");
  }
  next();
});

const PORT = 5000;
const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
);

// Handling Error
process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});
