import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EquipamentPositionHistory from 'App/Models/EquipamentPositionHistory'

export default class EquipamentPositionHistoriesController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const equipamentPositions = await EquipamentPositionHistory.create(body)
    response.status(201)

    return { message: 'Posição adicionada com sucesso', data: EquipamentPositionHistory }
  }
}
