import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { Tag } from 'grommet'

export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <Tag
      value={children}
    />
  )
}