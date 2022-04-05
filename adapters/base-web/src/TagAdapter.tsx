import * as React from 'react'

import { TagProps } from '@quick-change/core'

import { Tag, KIND, VARIANT } from 'baseui/tag'

/**
 * @see https://baseweb.design/components/tag
 */
export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  return (
    <Tag
      kind={kindByType(type)}
      onClick={onClick}
      variant={VARIANT.solid}
      closeable={onClose}>
      {children}
    </Tag>
  )
}

function kindByType(type: any) {
  switch (type) {
    case 'primary':
      return KIND.primary
    case 'info':
      return KIND.accent
    case 'success':
      return KIND.positive
    case 'warning':
      return KIND.warning
    case 'danger':
      return KIND.negative
    default:
      return undefined
  }
}