import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

const defaultProps = {
  size: 'medium'
}

export type SpinnerProps = PropsType<typeof propTypes, typeof defaultProps>

export function Spinner({ size }: SpinnerProps) {
  const { SpinnerAdapter } = useComponents()
  return (
    <SpinnerAdapter size={size} />
  )
}