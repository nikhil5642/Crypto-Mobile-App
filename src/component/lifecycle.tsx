import React, {PureComponent} from 'react'

interface Props {
  onMount: <T>(action?: T) => void
  onUnmount: <T>(action?: T) => void
  onConstruct: <T>(action?: T) => void
}

export default class Lifecycle extends PureComponent<Partial<Props>> {
  constructor(props: Partial<Props>) {
    super(props)
    this.props.onConstruct?.()
  }

  componentDidMount() {
    this.props.onMount?.()
  }

  componentWillUnmount() {
    this.props.onUnmount?.()
  }

  render() {
    return <>{this.props.children}</>
  }
}
