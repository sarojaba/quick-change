import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents, ScopeProvider } from '../providers'

const propTypes = {
  children: PropTypes.array
}

const defaultProps = {
  children: []
}

export type BreadcrumbProps = PropsType<typeof propTypes, typeof defaultProps>

export function Breadcrumb({ children }: BreadcrumbProps) {
  const { BreadcrumbAdapter } = useComponents()

  return (
    <BreadcrumbAdapter>
      <ScopeProvider scope="breadcrumb">
        {children}
      </ScopeProvider>
    </BreadcrumbAdapter>
  )
}

Breadcrumb.propTypes = propTypes
Breadcrumb.defaultProps = defaultProps

/**
 * Sub components
 */
import { BreadcrumbItem } from './BreadcrumbItem'

Breadcrumb.Item = BreadcrumbItem
