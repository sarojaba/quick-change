import * as React from 'react'

import { TagProps } from '@quick-change/core'

import { DuetBadge as Badge } from '@duetds/react'

import { variationByType } from './util'

/**
 * @see https://www.duetds.com/components/badge/
 */
export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  return (
    <Badge variation={variationByType(type)}>
      {children}
    </Badge>
  )
}