import * as React from 'react'

import { TagProps } from '@quick-change/core'

import { Token } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/token
 */
export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  return (
    <Token
      closeable={onClose}
      onClick={onClose}
      valid={type === 'danger'}
    >
      {children}
    </Token>
  )
}