import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <a className="nes-badge">
      <span className={`is-${classNameByType(type)}`}>{ children }</span>
    </a>
  )
}

function classNameByType(type) {
  switch (type) {
    case 'primary':
    case 'success':
    case 'warning':
      return type
    case 'info':
      return 'primary'
    case 'danger':
      return 'error'
    default:
      return 'dark'
  }
}