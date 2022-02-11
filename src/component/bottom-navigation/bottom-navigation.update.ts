import {matchR} from '@action-land/tarz'

import {
  BottomNavigationInterface,
  BottomNavigationOptions,
} from './bottom-navigation.interface'

export const update = matchR<BottomNavigationInterface>({
  onOptionSelected: (itemSelected: BottomNavigationOptions, state) => {
    return {...state, selection: itemSelected}
  },
})
