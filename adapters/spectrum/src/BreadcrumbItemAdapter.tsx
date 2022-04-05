import * as React from 'react'

import { BreadcrumbItemProps } from '@quick-change/core'

import { Item } from '@adobe/react-spectrum'

export function BreadcrumbItemAdapter({ href, active, children }: BreadcrumbItemProps) {
  return (
    <Item>{children}</Item>
  )
}