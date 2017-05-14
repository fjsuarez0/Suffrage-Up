const path = require('path')

const express = require('express')

const app = express()

const server = require('http').Server(app)

const io = require('socket.io')(server)

const exphbs = require('express-handlebars')

const mongoose = require('mongoose')

const functions = require('./functions/functions')

const models = require('./model/schema_model')

//const moment = require('moment')

const d = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')

//const admin = require('firebase-admin')


const port = process.env.PORT || 9000
// Middleswares Configuration
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))

// Middleswares Configuration
app.set('view engine', '.hbs')

app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
// Middleswares Configuration

mongoose.connect('mongodb://americo:qwerty@ds143030.mlab.com:43030/app-lap', (err) => {
  if(err){
    console.log(err)
  }
})

const date = new Date

// APP

app.get('/si', (functions.pushVoteSi))

app.get('/noSe', (functions.pushVoteNoSe))

app.get('/no', (functions.pushVoteNo))

app.get('/winner', (functions.winner))

app.get('/truncate', (functions.truncateAll))

app.get('/', (req, res)=>{
  res.render('home')
})

// APP

/// Real Time

server.listen(6969, () => {
  console.log('¿Hey Como estan las cosas?')
})

io.on('connection', (socket) => {
  console.log('cliente conectado')
  socket.emit('messages', 'Epa todo salio bien')
})
/// Real Time

app.listen(port, () => {
  console.log( `htttp://localhost:${port}`)
})
