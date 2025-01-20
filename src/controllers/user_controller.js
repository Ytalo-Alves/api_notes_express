const AppError = require("../utils/appError");


class UsersController {
  create(request, response) {
    const { name, email, password } = request.body

    if (!name) {
      throw new AppError('Name is required')
    }

    response.status(201).json({ message: `User created successfully` })
  }
}

module.exports = UsersController;