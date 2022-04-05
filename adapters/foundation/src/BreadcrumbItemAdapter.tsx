import * as React from 'react'

import { BreadcrumbItemProps } from '@quick-change/core'

export function BreadcrumbItemAdapter({ href, active, children }: BreadcrumbItemProps) {
  return (
    <li>
      <ListItemContent href={href} active={active}>{children}</ListItemContent>
    </li>
  )
}

function ListItemContent({ href, active, children }) {
  if (!active) {
    return <a href={href}>{children}</a>
  }

  return <>
    <span className="show-for-sr">Current: </span>
    {children}
  </>
}