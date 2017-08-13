var env = process.env.NODE_ENV || 'development'

const Knex = require('knex')
const knexConfig = require('../../knexfile')[env]
const knex = Knex(knexConfig)

function enrolLicence (licenseData) {
  return knex('licensing').insert(licenseData)
}

module.exports = {
  enrolLicence
}
