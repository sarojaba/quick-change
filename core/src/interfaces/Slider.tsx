import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

const defaultProps = {
  min: 0,
  max: 100,
  value: 0,
  disabled: false,
  onChange: undefined
}

export type SliderProps = PropsType<typeof propTypes, typeof defaultProps>

export function Slider(props: SliderProps) {
  const { SliderAdapter } = useComponents()
  return <SliderAdapter {...props} />
}

Slider.propTypes = propTypes
Slider.defaultProps = defaultProps
