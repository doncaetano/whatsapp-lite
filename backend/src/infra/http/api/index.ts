import { Router } from 'express'

import { userRoute } from '../../../modules/user/routes'

const router = Router()

router.use('/users', userRoute)

export { router }
