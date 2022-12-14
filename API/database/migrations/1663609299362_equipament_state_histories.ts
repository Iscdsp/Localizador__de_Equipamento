import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'equipament_state_histories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('equipment_id').primary()
      table.json('states')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
