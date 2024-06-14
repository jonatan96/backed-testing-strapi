import { errorMessages } from '../../../../extensions/complements/custom/response'
import { errorCode, errorMessage } from '../../../../extensions/enum/generic'
import { findBookModel } from '../../models/book'
import fs from 'fs'
const path = './src/extensions/complements/data_book_list.json'

export const findOneBookIdServiceImpl = async (ctx: any, id: string): Promise<findBookModel> => {
  try {
    const file = JSON.parse(fs.readFileSync(path).toString())
    const bookObject = file.find((bookId: findBookModel) => bookId.id === id)
    if (bookObject) {
      return bookObject
    }
    errorMessages(ctx, errorCode.BAD_REQUEST, errorMessage.NOT_FOUND_ERROR)
  } catch (error) {
    errorMessages(ctx, errorCode.INTERNAL_SERVER, errorMessage.INTERNAL_SERVER_ERROR)
  }
}
