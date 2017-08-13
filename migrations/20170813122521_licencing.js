
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('licensing', (table) => {
    table.increments('uniqueLicenceCode').primary()
    table.string('name').notNullable()
    table.string('addressLineOne').notNullable()
    table.string('addressLineTwo')
    table.string('cityTown').notNullable()
    table.string('region').notNullable()
    table.date('birthdate').notNullable()
    table.date('issueDate').notNullable()
    table.integer('issueMonth')
    table.integer('issueYear')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('licensing')
};
