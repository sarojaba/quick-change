import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <div className="oui-badge">{children}</div>
  )
}