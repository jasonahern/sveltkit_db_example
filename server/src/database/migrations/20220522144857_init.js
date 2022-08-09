/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('users', (table) => {
        table.increments().notNullable();
        table.string('email').notNullable().unique();
        table.string('name').notNullable();
        table.string('password', 127).notNullable();
        table.dateTime('last_login');
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users');
};
