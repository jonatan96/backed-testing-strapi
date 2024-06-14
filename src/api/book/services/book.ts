import { factories } from '@strapi/strapi'
import {
  createBookModel,
  findBookModel,
  requestBookQueryModel,
  responseCreateBookModel,
} from '../models/book'
import { findHelloServiceImpl } from './impl/findHelloServiceImpl'
import { createBookServiceImpl } from './impl/createBookServiceImpl'
import { findOneBookIdServiceImpl } from './impl/findOneBookIdServiceImpl'
import { findListBookServiceImpl } from './impl/findListBookServiceImpl'
import { findBookAverageServiceImpl } from './impl/findBookAverageServiceImpl'

export default factories.createCoreService('api::book.book', () => ({
  async helloService(): Promise<string> {
    return findHelloServiceImpl()
  },
  async findBookAverageService(ctx: any): Promise<{ average: number }> {
    return findBookAverageServiceImpl(ctx)
  },
  async createBookService(ctx: any, body: createBookModel): Promise<responseCreateBookModel> {
    return createBookServiceImpl(ctx, body)
  },
  async findListBookService(ctx: any, query: requestBookQueryModel): Promise<findBookModel[]> {
    return findListBookServiceImpl(ctx, query)
  },
  async findOneBookIdService(ctx: any, id: string): Promise<findBookModel> {
    return findOneBookIdServiceImpl(ctx, id)
  },
}))
