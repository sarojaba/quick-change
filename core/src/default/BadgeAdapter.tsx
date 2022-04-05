import * as React from 'react'

import { BadgeProps } from '../interfaces'

/**
 * @see 
 */
export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <div>{count}</div>
  )
}