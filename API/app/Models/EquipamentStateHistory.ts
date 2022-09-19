import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EquipamentStateHistory extends BaseModel {
  @column({ isPrimary: true })
  public equipmentId: string

  @column()
  public states: [date: string, equipmentStateId: string]

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
