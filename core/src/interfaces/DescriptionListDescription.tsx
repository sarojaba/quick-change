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

export type DescriptionListDescriptionProps = PropsType<typeof propTypes, typeof defaultProps>

export function DescriptionListDescription({ children }: DescriptionListDescriptionProps) {
  const { DescriptionListDescriptionAdapter } = useComponents()
  return (
    <DescriptionListDescriptionAdapter>{children}</DescriptionListDescriptionAdapter>
  )
}

DescriptionListDescription.propTypes = propTypes
DescriptionListDescription.defaultProps = defaultProps
