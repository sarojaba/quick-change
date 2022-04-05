import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { Chip } from 'ui-neumorphism'

export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <Chip type={typeByType(type)}>{children}</Chip>
  )
}

function typeByType(type) {
  switch (type) {
    case 'info':
    case 'success':
    case 'warning':
      return type
    case 'danger':
      return 'error'
    default:
      return undefined
  }
}