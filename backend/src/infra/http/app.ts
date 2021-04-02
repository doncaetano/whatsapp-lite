import express, { json } from 'express'

import { router } from './api'

const app = express()

app.use(json())

app.use(router)

app.listen(3333, () => {
  console.log('[APP]: Server listening on port 3333.')
})
