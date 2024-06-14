import { strapiDefaultModel } from '../../../extensions/complements/models/strapiDefault'

export interface findBookModel {
  id: string
  title: string
  author: string
  price: number
  availability: number
  num_reviews: number
  stars: number
  description: string
}

export interface createBookModel {
  title: string
  author: string
  year: number
}

export interface responseCreateBookModel extends strapiDefaultModel, createBookModel {}

export interface requestBookQueryModel {
  price?: number
  phrase?: string
}
