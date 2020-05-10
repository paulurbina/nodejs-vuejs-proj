import { Router } from 'express'

import authController from '@controllers/v1/auth.controller'
import registerValidators from '@validators/register'

const authRouter = new Router()

authRouter.post('/login', authController.login)

authRouter.post('/register', registerValidators, authController.register)

export default authRouter
