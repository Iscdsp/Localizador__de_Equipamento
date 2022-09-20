import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EquipamentModel from 'App/Models/EquipamentModel'

export default class EquipamentModelsController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const equipamentsModel = await EquipamentModel.create(body)

    response.status(201)

    return { message: 'Modelo adicionado com sucesso!', data: EquipamentModel }
  }

  public async index() {
    const equipamentModels = await EquipamentModel.all()

    return { data: equipamentModels }
  }
}
