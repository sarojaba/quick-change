import * as React from 'react'

import { TagProps } from '@quick-change/core'

import { Tag } from '@class101/ui'

/**
 * @see https://ui.class101.dev/components/tag
 */
export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  return (
    <Tag
      value={children}
      label={children}
      onRemove={onClose}
    />
  )
}