import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  modifiers: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node
}

const defaultProps = {
  modifiers: [],
  children: undefined
}

export type KeyboardProps = PropsType<typeof propTypes, typeof defaultProps>

export function Keyboard(props: KeyboardProps) {
  const { KeyboardAdapter } = useComponents()
  return <KeyboardAdapter {...props} />
}

Keyboard.propTypes = propTypes
Keyboard.defaultProps = defaultProps
