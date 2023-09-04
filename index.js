require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const spotify = require('./middlewares/spotify')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/spotify/v1', spotify)

app.listen(process.env.PORT, () => console.log('Express Server is running on port:' + process.env.PORT + '! 🌎'))