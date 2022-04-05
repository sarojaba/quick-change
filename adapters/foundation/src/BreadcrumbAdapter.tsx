import * as React from 'react'

import { BreadcrumbProps } from '@quick-change/core'

export function BreadcrumbAdapter({ children }: BreadcrumbProps) {
  return (
    <nav role="navigation">
      <ul className="breadcrumbs">{ children }</ul>
    </nav>
  )
}
