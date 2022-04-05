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

export type DescriptionListTermProps = PropsType<typeof propTypes, typeof defaultProps>

export function DescriptionListTerm({ children }: DescriptionListTermProps) {
  const { DescriptionListTermAdapter } = useComponents()
  return <DescriptionListTermAdapter>{children}</DescriptionListTermAdapter>
}

DescriptionListTerm.propTypes = propTypes
DescriptionListTerm.defaultProps = defaultProps
