import * as React from 'react'

import { BreadcrumbProps } from '@quick-change/core'

import { BreadcrumbsBar } from 'monday-ui-react-core'

/**
 * @see https://style.monday.com/?path=/docs/navigation-breadcrumbsbar-breadcrumbsbar--overview
 */
export function BreadcrumbAdapter({ children }: BreadcrumbProps) {
  return (
    <BreadcrumbsBar>{children}</BreadcrumbsBar>
  )
}