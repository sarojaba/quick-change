import * as React from 'react'

import { BreadcrumbProps } from '@quick-change/core'

import { Breadcrumbs } from '@adobe/react-spectrum'

export function BreadcrumbAdapter({ children }: BreadcrumbProps) {
  return (
    <Breadcrumbs>{children}</Breadcrumbs>
  )
}
