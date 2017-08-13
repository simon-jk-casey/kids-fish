const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/v1', (req, res) => {
  res.json('API v1 ENDPOINT ACTIVE')
})

router.post('/v1/licensing', (req, res) => {
  console.log(req.body)
})

module.exports = router
