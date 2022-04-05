import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  size: PropTypes.node,
  children: PropTypes.node
}

const defaultProps = {
  size: undefined,
  children: undefined
}

export type DisplayProps = PropsType<typeof propTypes, typeof defaultProps>

export function Display({ size, children }: DisplayProps) {
  const { DisplayAdapter } = useComponents()

  return (
    <DisplayAdapter size={size}>{ children }</DisplayAdapter>
  )
}

Display.propTypes = propTypes
Display.defaultProps = defaultProps
