import * as React from 'react'

import { BreadcrumbItemProps } from '@quick-change/core'

import { Link } from '@mui/material'

export function BreadcrumbItemAdapter({ href, active, children }: BreadcrumbItemProps) {

  const props = {
    underline: 'hover',
    color: 'inherit',
    href: href
  }

  if (active) {
    props['aria-current'] = "page"
  }

  return <Link {...props}>{ children }</Link>
}