const { hash } = require("bcryptjs");
const sqliteConnection = require("../database/sqlite");
const AppError = require("../utils/appError");

class UsersController {
  async create(request, response) {
    const database = await sqliteConnection();

    const { name, email, password } = request.body;

    const checkUserExists = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (checkUserExists) {
      throw new AppError("Email already exists");
    }

    const hashedPassword = await hash(password, 10);

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    return response.status(201).json({ message: `User created successfully` });
  }

  async update(request, response) {
    
  }
}

module.exports = UsersController;
