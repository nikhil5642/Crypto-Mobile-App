export interface BottomNavigationInterface {
  selection: BottomNavigationOptions
}

export type BottomNavigationParams = Record<string, any>

export enum BottomNavigationOptions {
  Market = 'Market',
  PortFolio = 'PortFolio',
  InvestmentIdeas = 'Ideas',
}
