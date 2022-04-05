import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { Badge } from '@class101/ui'

/**
 * @see https://ui.class101.dev/components/badge
 */
export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <Badge>{count}</Badge>
  )
}