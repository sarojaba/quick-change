import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import Badge from '@atlaskit/badge'

/**
 * @see https://atlassian.design/components/badge/
 */
export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <Badge appearance={colorByType(type)}>
      {count}
    </Badge>
  )
}

function colorByType(type) {
  switch (type) {
    case 'primary':
      return type
    case 'danger':
      return 'important'
    default:
      return undefined
  }
}