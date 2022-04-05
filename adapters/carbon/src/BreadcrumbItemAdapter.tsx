import * as React from 'react'

import { BreadcrumbItemProps } from '@quick-change/core'

import { BreadcrumbItem } from 'carbon-components-react'

export function BreadcrumbItemAdapter({ href, active, children }: BreadcrumbItemProps) {
  return (
    <BreadcrumbItem href={href}>{children}</BreadcrumbItem>
  )
}