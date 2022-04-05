import * as React from 'react'

import { BreadcrumbItemProps } from '@quick-change/core'

import { Breadcrumb } from 'semantic-ui-react'

export function BreadcrumbItemAdapter({ href, active, children }: BreadcrumbItemProps) {
  return (
    <Breadcrumb.Section
      active={active}>
      {children}
    </Breadcrumb.Section>
  )
}