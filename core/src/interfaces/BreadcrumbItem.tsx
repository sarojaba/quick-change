import * as React from 'react'

import { useComponents } from '../providers'

export interface BreadcrumbItemProps {
  href: string,
  active: boolean,
  children: string
}

export function BreadcrumbItem({ href, active, children }: BreadcrumbItemProps) {
  const { BreadcrumbItemAdapter } = useComponents()
  return <BreadcrumbItemAdapter href={href} active={active}>{children}</BreadcrumbItemAdapter>
}
