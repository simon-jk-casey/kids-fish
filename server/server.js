const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

const api = require('./routes/api')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api', api)

module.exports = server
