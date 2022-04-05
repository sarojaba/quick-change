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

export type DescriptionListProps = PropsType<typeof propTypes, typeof defaultProps>

export function DescriptionList({ children }: DescriptionListProps) {
  const { DescriptionListAdapter } = useComponents()
  return <DescriptionListAdapter>{children}</DescriptionListAdapter>
}

DescriptionList.propTypes = propTypes
DescriptionList.defaultProps = defaultProps

/**
 * Sub components
 */
import { DescriptionListTerm } from './DescriptionListTerm'
import { DescriptionListDescription } from './DescriptionListDescription'

DescriptionList.Term = DescriptionListTerm
DescriptionList.Description = DescriptionListDescription