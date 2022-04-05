import * as React from 'react'

import { IconButtonProps } from '@quick-change/core'

import { IconButton } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/actions/icon-button
 */
export function IconButtonAdapter({ icon, disabled }: IconButtonProps) {
  return (
    <IconButton icon="plus" disabled={disabled} />
  )
}