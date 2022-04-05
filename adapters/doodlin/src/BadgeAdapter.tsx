import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { Badge } from 'doodlin-design-system'

/**
 * @see https://design.doodlin.co.kr/?path=/story/component-badge--default
 */
export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <Badge number={count} />
  )
}