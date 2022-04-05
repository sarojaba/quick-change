import * as React from 'react'

import { TagProps } from '@quick-change/core'

import { Badge } from 'evergreen-ui'

/**
 * @see https://evergreen.segment.com/components/badges
 */
export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  return (
    <Badge
      color={colorByType(type)}
      marginRight={8}>
      {children}
    </Badge>
  )
}

/**
 * @see https://evergreen.segment.com/components/badges#when_to_use_what_badge
 */
function colorByType(type) {
  switch (type) {
    case 'info':
      return 'purple'
    case 'success':
      return 'green'
    case 'warning':
      return 'yellow'
    case 'danger':
      return 'red'
    default:
      return undefined
  }
}