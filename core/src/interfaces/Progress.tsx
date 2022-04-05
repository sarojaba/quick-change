import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  type: PropTypes.string,
  value: PropTypes.number,
  max: PropTypes.number,
  label: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

const defaultProps = {
  type: 'primary',
  value: 0,
  max: 100,
  label: false,
  size: 'medium'
}

export type ProgressProps = PropsType<typeof propTypes, typeof defaultProps>

export function Progress({ type, value, max, label, size }: ProgressProps) {
  const { ProgressAdapter } = useComponents()

  return (
    <ProgressAdapter
      type={type}
      value={value}
      max={max}
      label={label}
      size={size}
    />
  )
}

Progress.propTypes = propTypes
Progress.defaultProps = defaultProps
