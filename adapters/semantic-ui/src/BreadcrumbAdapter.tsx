import * as React from 'react'

import { BreadcrumbProps } from '@quick-change/core'

import { Breadcrumb } from 'semantic-ui-react'

export function BreadcrumbAdapter({ children }: BreadcrumbProps) {
  return (
    <Breadcrumb>{children}</Breadcrumb>
  )
}