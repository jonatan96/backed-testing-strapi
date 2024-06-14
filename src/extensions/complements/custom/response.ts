import { errorCode, errorMessage } from '../../enum/generic'

export async function errorMessages(ctx: any, code: errorCode, message: string, error?: any) {
  return ctx.send(
    { message: error ? `${code}|${error.name}: ${error.message}` : `${code}|${message}` },
    code,
  )
}

export async function errorController(
  ctx: any,
  error: any,
  code: errorCode,
  message: errorMessage,
) {
  return ctx.throw(code, error.details ? error.details[0].message : message)
}
