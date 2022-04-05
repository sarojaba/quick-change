import * as React from 'react'

import { BreadcrumbItemProps } from '@quick-change/core'

import { BreadcrumbItem } from 'monday-ui-react-core'

/**
 * @see 
 */
export function BreadcrumbItemAdapter({ href, active, children }: BreadcrumbItemProps) {
  return (
    <BreadcrumbItem text={children} isCurrent={active} />
  )
}