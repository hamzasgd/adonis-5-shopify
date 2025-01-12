import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 255).notNullable();
      table.string('email', 255).notNullable()
      table.string('password', 180).nullable()
      table.string('token', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.boolean('shopify_grandfathered').defaultTo(false)
      table.string('shopify_namespace').nullable().defaultTo(null)
      table.boolean('shopify_freemium').defaultTo(false)
      table.integer('plan_id').unsigned().nullable()
      table.timestamps(true)
      table.timestamp('deleted_at').nullable();
      table.foreign('plan_id').references('id').inTable('plans');
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
