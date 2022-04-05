import * as React from 'react'

import { BreadcrumbProps } from '@quick-change/core'

import { Breadcrumbs } from '@mui/material'

export function BreadcrumbAdapter({ children }: BreadcrumbProps) {
  return <Breadcrumbs ariaLabel="breadcrumb">{ children }</Breadcrumbs>
}
