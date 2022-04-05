import * as React from 'react'

import { TagProps } from '@quick-change/core'

import { Tag } from 'antd'

/**
 * @see https://ant.design/components/tag/
 */
export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  return (
    <Tag
      color={colorByType(type)}
      closable={onClose} onClose={onClose}
    >
      {children}
    </Tag>
  )
}

function colorByType(type) {
  switch (type) {
    case 'success':
    case 'warning':
      return type
    case 'info':
      return 'processing'
    case 'danger':
      return 'error'
    default:
      return undefined
  }
}