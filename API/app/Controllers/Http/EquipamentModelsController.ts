import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EquipamentModel from 'App/Models/EquipamentModel'

export default class EquipamentModelsController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const equipamentsModels = await EquipamentModel.create(body)

    response.status(201)

    return { message: 'Modelo adicionado com sucesso!', data: EquipamentModel }
  }
}
