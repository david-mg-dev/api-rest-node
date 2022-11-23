//import { env } from 'process';
import express from 'express'
import { router } from './routes/familyRoute'

const app = express()
app.use(express.json()) // Middleware que transforma la req.body a un json

//const PORT = process.env.PORT || 5003
const PORT = 5003

app.use(router)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
