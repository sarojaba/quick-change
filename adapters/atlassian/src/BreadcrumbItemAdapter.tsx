import * as React from 'react'

import { BreadcrumbItemProps } from '@quick-change/core'

import { BreadcrumbsItem } from '@atlaskit/breadcrumbs'

export function BreadcrumbItemAdapter({ href, active, children }: BreadcrumbItemProps) {
  return (
    <BreadcrumbsItem href={href} text={children} />
  )
}