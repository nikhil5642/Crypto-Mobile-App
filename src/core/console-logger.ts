import {Action} from '@action-land/core'

import {flattenActions} from './flatten-actions'

const actionName = (action: any): any => {
  const name: Array<string | number> = []
  while (Action.isAction(action)) {
    name.push(action.type)
    action = action.value
  }
  return {type: name.join('/'), value: action}
}

export default (p: {
  action: Action<unknown>
  preState: unknown
  currState: unknown
  command: Action<unknown>
}): void => {
  const flatAction = actionName(p.action)
  const flatCommand = flattenActions(p.command).map(actionName)

  console.groupCollapsed(
    'INP:' +
      flatAction.type +
      '\nOUT:' +
      flatCommand.map((i) => i.type).join('\n    '),
  )

  console.log('ACTION', flatAction.value)
  console.log('COMMAND', p.command)
  console.log('PREVIOUS', p.preState)
  console.log('CURRENT', p.currState)
  console.groupEnd()
}
