import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EquipamentPositionHistory extends BaseModel {
  @column({ isPrimary: true })
  public equipmentId: string

  @column()
  public positions: [date: string, lat: number, lon: number]

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
