import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { CountBadge } from '@workday/canvas-kit-react'

/**
 * @see https://workday.github.io/canvas-kit/?path=/docs/components-indicators-badge-countbadge-react--default
 */
export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <CountBadge
      count={count}
    />
  )
}