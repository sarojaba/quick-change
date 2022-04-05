import * as React from 'react'

import { BreadcrumbItemProps } from '@quick-change/core'

export function BreadcrumbItemAdapter({ href, active, children }: BreadcrumbItemProps) {
  if (active) {
    return <li className="breadcrumb-item active" aria-current="page">{ children }</li>
  } else {
    const content = href
      ? <a href="#">{ children }</a>
      : children
    return <li className="breadcrumb-item">{ content }</li>
  }
}