import * as React from 'react'

import { BreadcrumbItemProps } from '@quick-change/core'

export function BreadcrumbItemAdapter({ href, active, children }: BreadcrumbItemProps) {
  return active
    ? <li>{children}</li>
    : <li>
        <a href={href}>{children}</a>
      </li>
}