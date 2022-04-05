import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { Tag } from 'govuk-react'

/**
 * @see https://govuk-react.github.io/govuk-react/?path=/docs/tag--default
 */
export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <Tag inactive={type !== 'primary'}>{children}</Tag>
  )
}