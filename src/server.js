require("express-async-errors");
const database = require("./database/sqlite");
const express = require("express");
const routes = require("./routes");
const AppError = require("./utils/appError");

const app = express();
app.use(express.json());
app.use(routes);

database();

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.log(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(3333, () => {
  console.log("Server is running on port 3333 🚀🚀🚀");
});
