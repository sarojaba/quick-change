import * as React from 'react'

import { TagProps } from '@quick-change/core'

import { Badge } from '@contentful/f36-components'

import { variantByType } from './utils/type'

/**
 * @see https://f36.contentful.com/components/badge
 */
export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  return (
    <Badge variant={variantByType(type)}>
      {children}
    </Badge>
  )
}