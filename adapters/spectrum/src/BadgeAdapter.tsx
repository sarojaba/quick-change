import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { StatusLight } from '@adobe/react-spectrum'

export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <StatusLight variant={variantByType(type)}>{children}</StatusLight>
  )
}

function variantByType(type) {
  switch (type) {
    case 'success':
      return 'positive'
    case 'warning':
      return 'yellow'
    case 'danger':
      return 'negative'
    default:
      return type
  }
}