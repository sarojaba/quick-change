import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  type: PropTypes.string,
  children: PropTypes.node
}

const defaultProps = {
  type: undefined,
  children: undefined
}

export type ColorPickerProps = PropsType<typeof propTypes, typeof defaultProps>

export function ColorPicker({ type, children }: ColorPickerProps) {
  const { ColorPickerAdapter } = useComponents()
  return (
    <ColorPickerAdapter />
  )
}

ColorPicker.propTypes = propTypes
ColorPicker.defaultProps = defaultProps
