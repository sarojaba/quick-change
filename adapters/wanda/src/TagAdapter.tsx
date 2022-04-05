import * as React from 'react'

import { TagProps } from '@quick-change/core'

import { Chip } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/other/chip
 */
export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  return (
    <Chip
      interactive={onClick}
      onDismissClick={onClick}
    >
      {children}
    </Chip>
  )
}