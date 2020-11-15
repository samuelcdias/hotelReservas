
exports.up = function(knex, Promise) {
    return knex.schema.createTable('agendas', table => {
        table.increments('id').primary()
        table.date('data').notNull()
        table.boolean('is_alta_temporada').notNull().default('')
        table.integer('quartoId').notNull().references('id').inTable('quartos')
        table.integer('reservaId').references('id').inTable('reservas')
        table.timestamps()
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('agenda')
};