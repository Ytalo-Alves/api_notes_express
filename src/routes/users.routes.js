const { Router } = require('express');
const UsersController = require('../controllers/user_controller')

const userRouter = Router()

const userController = new UsersController()

userRouter.post('/', userController.create)
userRouter.put('/:id', userController.update)

module.exports = userRouter;
