import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { Counter } from 'monday-ui-react-core'

/**
 * @see 
 */
export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <Counter count={children} />
  )
}