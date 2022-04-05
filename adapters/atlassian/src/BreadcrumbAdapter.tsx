import * as React from 'react'

import { BreadcrumbProps } from '@quick-change/core'

import Breadcrumbs from '@atlaskit/breadcrumbs'

export function BreadcrumbAdapter({ children }: BreadcrumbProps) {
  return (
    <Breadcrumbs>{children}</Breadcrumbs>
  )
}