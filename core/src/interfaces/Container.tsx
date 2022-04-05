import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  breakpoint: PropTypes.string,
  align: PropTypes.node,
  children: PropTypes.node
}

const defaultProps = {
  breakpoint: undefined,
  align: undefined,
  children: undefined
}

export type ContainerProps = PropsType<typeof propTypes, typeof defaultProps>

export function Container({ breakpoint, align, children }: ContainerProps) {
  const { ContainerAdapter } = useComponents()

  return (
    <ContainerAdapter breakpoint={ breakpoint } align={ align }>
      { children }
    </ContainerAdapter>
  )
}

Container.propTypes = propTypes
Container.defaultProps = defaultProps
