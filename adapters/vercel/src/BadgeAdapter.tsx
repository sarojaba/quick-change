import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { Tag } from '@geist-ui/core'

export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <Tag type={typeByType(type)}>{children}</Tag>
  )
}

function typeByType(type) {
  switch (type) {
    case 'secondary':
    case 'success':
    case 'warning':
      return type
    case 'danger':
      return 'error'
    default:
      return undefined
  }
}