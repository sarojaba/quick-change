import * as React from 'react'

import { TagProps } from '@quick-change/core'

import { EuiBadge } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/display/badge
 */
export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  return (
    <EuiBadge
      color={type}
      iconType={onClose ? 'cross' : undefined}
      iconSide={onClose ? 'right' : undefined}
      iconOnClick={onClose}
      onClickAriaLabel=""
    >
      {children}
    </EuiBadge>
  )
}