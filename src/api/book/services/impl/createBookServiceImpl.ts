import { errorMessages } from '../../../../extensions/complements/custom/response'
import { errorCode, errorMessage } from '../../../../extensions/enum/generic'
import { createBookModel, responseCreateBookModel } from '../../models/book'

export const createBookServiceImpl = async (
  ctx: any,
  body: createBookModel,
): Promise<responseCreateBookModel> => {
  try {
    const findBook = await strapi.db.query('api::book.book').findOne({
      where: { title: body.title },
    })
    if (findBook) {
      errorMessages(ctx, errorCode.BAD_REQUEST, errorMessage.DUPLICATED_NAME_BOOK)
    } else {
      const newBook = await strapi.db.query('api::book.book').create({
        data: {
          title: body.title,
          author: body.author,
          year: body.year,
        },
      })
      return newBook
    }
  } catch (error) {
    errorMessages(ctx, errorCode.INTERNAL_SERVER, errorMessage.CREATE_BOOK_ERROR)
  }
}
