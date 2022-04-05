import * as React from 'react'

import { BreadcrumbProps } from '@quick-change/core'

import { Breadcrumb } from 'rbx'

export function BreadcrumbAdapter({ children }: BreadcrumbProps) {
  return (
    <Breadcrumb>{children}</Breadcrumb>
  )
}