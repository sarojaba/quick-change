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

export type MainProps = PropsType<typeof propTypes, typeof defaultProps>

export function Main({ children }: any) {
  const { MainAdapter } = useComponents()
  return <MainAdapter>{children}</MainAdapter>
}

Main.propTypes = propTypes
Main.defaultProps = defaultProps
