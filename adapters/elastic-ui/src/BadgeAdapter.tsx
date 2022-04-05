import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { EuiNotificationBadge } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/display/badge#notification-badge-type
 */
export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <EuiNotificationBadge>
      {children}
    </EuiNotificationBadge>
  )
}