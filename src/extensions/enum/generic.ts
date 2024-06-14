export enum errorCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
}

export enum errorMessage {
  NOT_FOUND_ERROR = 'error not found',
  INTERNAL_SERVER_ERROR = 'internal server error',
  CREATE_BOOK_ERROR = 'error creating a new book',
  DUPLICATED_NAME_BOOK = 'error there is a book with this name',
}
