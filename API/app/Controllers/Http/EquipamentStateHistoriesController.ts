import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EquipamentStateHistory from 'App/Models/EquipamentStateHistory'

export default class EquipamentStateHistoriesController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const states = request.toJSON()
    body.states = states
    const equipamentStateHistory = await EquipamentStateHistory.create(body)

    response.status(201)
    return { message: 'Momento de estado adicionado com sucesso!', data: EquipamentStateHistory }
  }

  public async index() {
    const equipamentsStateHistory = await EquipamentStateHistory.all()

    return { data: equipamentsStateHistory }
  }
}
