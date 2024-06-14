import Joi from 'joi'
import { messageJoi } from '../../../extensions/complements/custom/joiMessagesError'

export const schemaBookQueryRequest = Joi.object({
  price: Joi.number().optional().messages(messageJoi),
  phrase: Joi.string().optional().messages(messageJoi),
})

export const schemaCreateBookRequest = Joi.object({
  title: Joi.string().required().messages(messageJoi),
  year: Joi.number().integer().required().messages(messageJoi),
  author: Joi.string().required().messages(messageJoi),
})
