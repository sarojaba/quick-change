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

export type EmptyProps = PropsType<typeof propTypes, typeof defaultProps>

export function Empty({ children }: EmptyProps) {
  const { EmptyAdapter } = useComponents()

  return (
    <EmptyAdapter>{children}</EmptyAdapter>
  )
}

Empty.propTypes = propTypes
Empty.defaultProps = defaultProps
