import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { FastBadge } from './components'

export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return <FastBadge fill={type}>{children}</FastBadge>
}