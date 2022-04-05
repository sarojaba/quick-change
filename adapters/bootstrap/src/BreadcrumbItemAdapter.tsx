import * as React from 'react'

import { BreadcrumbItemProps } from '@quick-change/core'

import { Breadcrumb } from 'react-bootstrap'

export function BreadcrumbItemAdapter({ href, active, children }: BreadcrumbItemProps) {
  return (
    <Breadcrumb.Item href={href} active={active}>{children}</Breadcrumb.Item>
  )
}