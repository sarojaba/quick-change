import * as React from 'react'

import { BreadcrumbProps } from '@quick-change/core'

export function BreadcrumbAdapter({ children }: BreadcrumbProps) {
  return (
    <ol className="breadcrumb">{ children }</ol>
  )
}