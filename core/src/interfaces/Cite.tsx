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

export type CiteProps = PropsType<typeof propTypes, typeof defaultProps>

export function Cite({ children }: CiteProps) {
  const { CiteAdapter } = useComponents()

  return (
    <CiteAdapter>{children}</CiteAdapter>
  )
}

Cite.propTypes = propTypes
Cite.defaultProps = defaultProps
