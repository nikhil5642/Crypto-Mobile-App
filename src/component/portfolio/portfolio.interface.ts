export interface PortFolioInterface {
  userId: string
  data: PortFolioItem[]
}

export type PortFolioParams = {userId: string}

export interface PortFolioItem {
  name: string
  value: string
}
