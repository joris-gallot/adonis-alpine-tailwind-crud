import Factory from '@ioc:Adonis/Lucid/Factory'
import Post from 'App/Models/Post'

export const PostFactory = Factory.define(Post, ({ faker }) => {
  return {
    name: faker.name.title(),
    description: faker.lorem.paragraph(10),
    // images: faker.internet.password(),
  }
}).build()
