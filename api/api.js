var express = require('express')
var app = express()
const { parse } = require('url')

const api = express.Router()
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
api.get(['/hello', '/hi', '/hoi'], (req, res) => {
  res.send('hi')
})
api.get(['/ping', '/pong', '/up'], (req, res) => {
  res.send('pong')
})
api.get('/', (req, res) => {
  res.send(
    `
   api
    `
  )
})
app.use('/api', api)
app.listen(3000, () => {
  //console.log('Server running on port 3000')
})
