import * as React from 'react'

import { IconButtonProps } from '@quick-change/core'

import { IconButton } from 'evergreen-ui'

/**
 * @see https://evergreen.segment.com/components/buttons#icon_buttons
 */
export function IconButtonAdapter({ icon, disabled }: IconButtonProps) {
  return (
    <IconButton icon={icon} disabled={disabled} />
  )
}