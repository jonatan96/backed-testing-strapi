import { errorMessages } from '../../../../extensions/complements/custom/response'
import { errorCode, errorMessage } from '../../../../extensions/enum/generic'
import { findBookModel, requestBookQueryModel } from '../../models/book'
import fs from 'fs'

const path = './src/extensions/complements/data_book_list.json'
/*
    este servicio contiene 3 funcionalidades para los siguientes endpoints.
    endpoint:
    * api/books
    * api/books?price=450
    * api/books?phrase=oz
*/
export const findListBookServiceImpl = async (
  ctx,
  query: requestBookQueryModel,
): Promise<findBookModel[]> => {
  try {
    const bookPriceArray = []
    const file = JSON.parse(fs.readFileSync(path).toString())
    // return del endpoint api/books?price=450
    if (query.price) {
      file.forEach(element => {
        if (element.price >= query.price) {
          bookPriceArray.push(element)
        }
      })
      if (bookPriceArray.length > 0) {
        return bookPriceArray
      }
      errorMessages(ctx, errorCode.NOT_FOUND, errorMessage.NOT_FOUND_ERROR, undefined)
    } else if (query.phrase) {
      // return del endpoint api/books?phrase=oz
    }
    // return del endpoint api/books
    const bookList = await JSON.parse(fs.readFileSync(path).toString())
    return bookList
  } catch (error) {
    errorMessages(ctx, errorCode.INTERNAL_SERVER, errorMessage.INTERNAL_SERVER_ERROR, error)
  }
}
