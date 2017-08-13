const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/v1', (req, res) => {
  res.json('API v1 ENDPOINT ACTIVE')
})

router.post('/v1/licensing', (req, res) => {
  db.enrolLicence(req.body)
  .then(() => res.sendStatus(200))
  .catch((err) => {
    throw err
  })
})

router.get('/v1/licensing', (req, res) => {
  db.licenceCount()
  .then((licenceCount) => {
    console.log(licenceCount)
    res.json(licenceCount)
  })
  .catch((err) => {
    throw err
  })
})

module.exports = router
