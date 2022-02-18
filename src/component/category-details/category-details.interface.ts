export interface CategoryDetailsInterface {
  name: string
  userId: string
  categoryId: string
  data: any
  imageUrls: string[]
}

export type CatergoryDetailsParams = {
  userId: string
  categoryId: string
}
