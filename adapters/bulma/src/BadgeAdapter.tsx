import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { Tag } from 'rbx'

export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <Tag color={type}>{children}</Tag>
  )
}