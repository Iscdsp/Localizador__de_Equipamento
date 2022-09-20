import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Equipament from 'App/Models/Equipament'

export default class EquipamentsController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const equipament = await Equipament.create(body)
    response.status(201)
    return {
      message: 'equipamento inserido com sucesso',
      data: Equipament,
    }
  }

  public async index() {
    const equipaments = await Equipament.all()
    return { data: equipaments }
  }
}
