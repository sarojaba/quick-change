import * as React from 'react'

import { TagProps } from '@quick-change/core'

import { Badge } from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/badge
 */
export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  return (
    <Badge>
      <div>{children}</div>
    </Badge>
  )
}