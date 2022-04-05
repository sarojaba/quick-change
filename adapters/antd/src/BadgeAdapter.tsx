import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { Badge } from 'antd'

/**
 * @see https://ant.design/components/badge/
 */
export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <Badge count={count}>
      {children}
    </Badge>
  )
}
