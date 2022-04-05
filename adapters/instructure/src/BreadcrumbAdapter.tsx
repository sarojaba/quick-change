import * as React from 'react'

import { BreadcrumbProps } from '@quick-change/core'

import { Breadcrumb } from '@instructure/ui'

/**
 * @see https://instructure.design/#Breadcrumb
 */
export function BreadcrumbAdapter({ children }: BreadcrumbProps) {
  return (
    <Breadcrumb label={undefined}>
      {children}
    </Breadcrumb>
  )
}