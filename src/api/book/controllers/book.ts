import { factories } from '@strapi/strapi'
import { errorController, errorMessages } from '../../../extensions/complements/custom/response'
import { schemaBookQueryRequest, schemaCreateBookRequest } from '../validations/book'
import { errorCode, errorMessage } from '../../../extensions/enum/generic'

export default factories.createCoreController('api::book.book', ({ strapi }) => ({
  async findHelloController(ctx: any) {
    try {
      return await strapi.service('api::book.book').helloService()
    } catch (error) {
      errorMessages(ctx, errorCode.BAD_REQUEST, errorMessage.INTERNAL_SERVER_ERROR, error)
    }
  },
  async findBookAverageController(ctx: any) {
    try {
      return await strapi.service('api::book.book').findBookAverageService(ctx)
    } catch (error) {
      errorMessages(ctx, errorCode.BAD_REQUEST, errorMessage.INTERNAL_SERVER_ERROR, error)
    }
  },
  async create(ctx: any) {
    try {
      const body = ctx.request.body
      await schemaCreateBookRequest.validateAsync(body)
      return await strapi.service('api::book.book').createBookService(ctx, body)
    } catch (error) {
      errorMessages(ctx, errorCode.BAD_REQUEST, errorMessage.INTERNAL_SERVER_ERROR, error)
    }
  },
  async find(ctx: any) {
    try {
      const query = ctx.request.query
      await schemaBookQueryRequest.validateAsync(query)
      return await strapi.service('api::book.book').findListBookService(ctx, query)
    } catch (error) {
      errorMessages(ctx, errorCode.BAD_REQUEST, errorMessage.INTERNAL_SERVER_ERROR, error)
    }
  },
  async findOne(ctx: any) {
    try {
      const { id } = ctx.request.params
      return await strapi.service('api::book.book').findOneBookIdService(ctx, id)
    } catch (error) {
      errorMessages(ctx, errorCode.BAD_REQUEST, errorMessage.INTERNAL_SERVER_ERROR, error)
    }
  },
}))
