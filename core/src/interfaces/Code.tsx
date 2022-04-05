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

export type CodeProps = PropsType<typeof propTypes, typeof defaultProps>

export function Code({ children }: CodeProps) {
  const { CodeAdapter } = useComponents()

  return (
    <CodeAdapter>{children}</CodeAdapter>
  )
}

Code.propTypes = propTypes
Code.defaultProps = defaultProps