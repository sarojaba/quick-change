import * as React from 'react'

import { TagProps } from '@quick-change/core'

import { Tag } from '@instructure/ui'

/**
 * @see https://instructure.design/#Tag
 */
export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  return (
    <Tag
      text={children}
      dismissible={onClose}
    />
  )
}