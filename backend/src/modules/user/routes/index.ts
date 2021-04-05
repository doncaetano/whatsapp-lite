import express from 'express'

import { createUserController } from '../useCases/createUser'

const userRoute = express.Router()

userRoute.post('/', createUserController.handle)

export { userRoute }
