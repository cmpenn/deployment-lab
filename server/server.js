const express = require('express')
const cors = require('cors')
require('dotenv').config()

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})


rollbar.log('Hello world!')

const app = express()

app.use(express.json())
app.use(cors())

const {home, css, js} = require('./controllers/pageCtrl.js')


app.get('/', home)
app.get('/css', css)
app.get('/js', js)

try{
    kdjhfkajh()
}catch{
    rollbar.error('you have an error')
}

const { PORT } = process.env

app.listen(PORT, () =>console.log(`Server is listening on port ${PORT}`))