exports.up = knex => knex.schema.createTable('links', table => {
  table.uuid('id')
  table.text('name').notNullable()
  table.integer('note_id').references('id').inTable('notes').onDelete('CASCADE')

  table.timestamp('created_at').defaultTo(knex.fn.now())
});


exports.down = knex => knex.schema.dropTable('links');
