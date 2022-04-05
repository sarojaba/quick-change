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

export type PageProps = PropsType<typeof propTypes, typeof defaultProps>

export function Page({ children }: PageProps) {
  const { PageAdapter } = useComponents()
  return <PageAdapter>{children}</PageAdapter>
}

Page.propTypes = propTypes
Page.defaultProps = defaultProps
