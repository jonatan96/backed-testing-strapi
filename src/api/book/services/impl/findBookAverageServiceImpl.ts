import fs from 'fs'
import { errorMessages } from '../../../../extensions/complements/custom/response'
import { errorCode, errorMessage } from '../../../../extensions/enum/generic'
const path = './src/extensions/complements/data_book_list.json'

export const findBookAverageServiceImpl = async (ctx: any): Promise<{ average: number }> => {
  try {
    const arrayPrice = []
    let average: string
    const file = JSON.parse(fs.readFileSync(path).toString())
    file.forEach(element => {
      arrayPrice.push(element.price)
    })
    const totalPrice = arrayPrice.reduce((previous, current) => (current += previous))
    average = (totalPrice / arrayPrice.length).toFixed(2)
    return { average: parseFloat(average) }
  } catch (error) {
    errorMessages(ctx, errorCode.INTERNAL_SERVER, errorMessage.INTERNAL_SERVER_ERROR)
  }
}
