import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return <span className={`label ${classNameByType(type)}`}>{children}</span>
}

function classNameByType(type) {
  switch (type) {
    case 'danger':
      return 'alert'
    default:
      return type
  }
}