import * as React from 'react'

import { useComponents } from '../providers'

export interface BadgeProps {
  // type: oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'danger']),
  type: any,
  count: number,
  onClick: any,
  children: any
}

export function Badge(props: BadgeProps) {
  const { BadgeAdapter } = useComponents()
  return <BadgeAdapter {...props} />
}
