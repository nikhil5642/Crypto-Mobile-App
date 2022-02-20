export interface BucketDetailsInterface {
  name: string
  userId: string
  categoryId: string
  data: any
}

export type BucketDetailsParams = {
  userId: string
  categoryId: string
}
