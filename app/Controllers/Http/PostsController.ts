import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class PostsController {
  public async index({ request, view }: HttpContextContract) {
    const page = Number(request.input('page', 1)) > 0 ? Number(request.input('page', 1)) : 1
    const search: string = request.input('search', '').toLowerCase()
    const limit = 10

    const posts = await Database.from('posts')
      .where((query) => query.where('name', 'ilike', `%${search}%`))
      .orWhere((query) => query.where('description', 'ilike', `%${search}%`))
      .paginate(page, limit)

    posts.baseUrl('/posts')

    const html = await view.render('posts/index', {
      posts,
    })

    return html
  }
}
