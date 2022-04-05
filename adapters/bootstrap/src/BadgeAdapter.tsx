import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { Badge } from 'react-bootstrap'

export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <Badge bg={classNameByType(type)} onClick={onClick}>
      {children}
    </Badge>
  )
}

function classNameByType(type) {
  switch (type) {
    case 'primary':
    case 'secondary':
    case 'info':
    case 'success':
    case 'warning':
    case 'danger':
      return type
    default:
      return undefined
  }
}