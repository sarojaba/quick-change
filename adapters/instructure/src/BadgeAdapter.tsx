import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { Badge } from '@instructure/ui'

/**
 * @see https://instructure.design/#Badge
 */
export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <Badge count={count}>
      {children}
    </Badge>
  )
}