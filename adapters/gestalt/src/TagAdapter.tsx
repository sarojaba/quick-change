import * as React from 'react'

import { TagProps } from '@quick-change/core'

import { Tag } from 'gestalt'

export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  return (
    <Tag
      text={children}
      errorMessage={type === 'danger' ? 'Error' : undefined}
      onRemove={onClick}
    />
  )
}
