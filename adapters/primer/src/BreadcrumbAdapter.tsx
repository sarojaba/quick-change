import * as React from 'react'

import { BreadcrumbProps } from '@quick-change/core'

import { Breadcrumbs } from '@primer/react'

/**
 * @see https://primer.style/react/Breadcrumbs
 */
export function BreadcrumbAdapter({ children }: BreadcrumbProps) {
  return (
    <Breadcrumbs>{children}</Breadcrumbs>
  )
}
