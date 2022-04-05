import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  children: PropTypes.node
}

const defaultProps = {
  children: undefined
}

export type StrongProps = PropsType<typeof propTypes, typeof defaultProps>

export function Strong({ children }: StrongProps) {
  const { StrongAdapter } = useComponents()

  return (
    <StrongAdapter>{children}</StrongAdapter>
  )
}

Strong.propTypes = propTypes
Strong.defaultProps = defaultProps
