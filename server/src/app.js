const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')

dotenv.config()
connectDB()

const app = express()
// const corsOptions = {
//   origin: 'http://localhost:5173',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204
// }

// app.use(cors(corsOptions))
// app.use(cors())

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true
  })
)

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

app.use(express.json())
app.use('/auth', authRoutes)

app.get('/test', (req, res) => {
  res.send('API is working!')
})

app.get('/', (req, res) => res.send('API is running...'))

module.exports = app
