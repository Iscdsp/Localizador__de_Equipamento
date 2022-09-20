import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EquipamentState from 'App/Models/EquipamentState'

export default class EquipamentStatesController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const equipamentState = await EquipamentState.create(body)
    response.status(201)

    return { message: 'tipo de estado adicionado', data: EquipamentState }
  }

  public async index() {
    const equipamentStates = await EquipamentState.all()

    return { data: equipamentStates }
  }
}
