import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { Pill } from 'evergreen-ui'

/**
 * @see https://evergreen.segment.com/components/badges#pill
 */
export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <Pill margin={8}>
      {count}
    </Pill>
  )
}