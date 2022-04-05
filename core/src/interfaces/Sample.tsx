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

export type SampleProps = PropsType<typeof propTypes, typeof defaultProps>

export function Sample({ children }: SampleProps) {
  const { SampleAdapter } = useComponents()

  return (
    <SampleAdapter>{children}</SampleAdapter>
  )
}

Sample.propTypes = propTypes
Sample.defaultProps = defaultProps
