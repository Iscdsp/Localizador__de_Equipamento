import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EquipamentPositionHistory from 'App/Models/EquipamentPositionHistory'

export default class EquipamentPositionHistoriesController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const positions = request.toJSON()
    body.positions = positions

    const equipamentPosition = await EquipamentPositionHistory.create(body)
    response.status(201)

    return { message: 'Posição adicionada com sucesso', data: EquipamentPositionHistory }
  }

  public async index() {
    const equipamentPositions = await EquipamentPositionHistory.all()

    return {
      data: equipamentPositions,
    }
  }
}
