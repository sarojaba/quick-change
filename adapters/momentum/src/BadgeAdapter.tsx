import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { Badge } from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/badge
 */
export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <Badge>
      <div>{count}</div>
    </Badge>
  )
}