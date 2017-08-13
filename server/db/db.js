var env = process.env.NODE_ENV || 'development'

const Knex = require('knex')
const knexConfig = require('../../knexfile')[env]
const knex = Knex(knexConfig)

function enrolLicence (licenseData) {
  return knex('licensing').insert(licenseData)
}

function licenceCount () {
  return knex('licensing').count('uniqueLicenceCode as count')
}

module.exports = {
  enrolLicence,
  licenceCount
}
