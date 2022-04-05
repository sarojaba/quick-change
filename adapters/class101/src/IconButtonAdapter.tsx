import * as React from 'react'

import { IconButtonProps } from '@quick-change/core'

import { IconButton } from '@class101/ui'

import { IconAdapter } from './IconAdapter'

/**
 * @see https://ui.class101.dev/components/icon-button
 */
export function IconButtonAdapter({ icon, disabled }: IconButtonProps) {
  return (
    <IconButton
      icon={<IconAdapter name={icon} />}
    />
  )
}