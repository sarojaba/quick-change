import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { Tag } from 'carbon-components-react'

export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <Tag>{children}</Tag>
  )
}