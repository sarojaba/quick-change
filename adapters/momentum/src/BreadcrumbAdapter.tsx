import * as React from 'react'

import { BreadcrumbProps } from '@quick-change/core'

import { Breadcrumbs } from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/breadcrumbs
 */
export function BreadcrumbAdapter({ children }: BreadcrumbProps) {
  return (
    <Breadcrumbs>
      {children}
    </Breadcrumbs>
  )
}