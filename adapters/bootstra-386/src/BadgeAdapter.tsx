import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return <span className={`badge ${classNameByType(type)}`} onClick={onClick}>{ children }</span>
}

function classNameByType(type) {
  switch (type) {
    case 'primary':
    case 'secondary':
    case 'info':
    case 'success':
    case 'warning':
    case 'danger':
      return `badge-${type}`
    default:
      return ''
  }
}