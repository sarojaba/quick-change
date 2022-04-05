import * as React from 'react'

import { CardProps } from '@quick-change/core'

/**
 * @see https://stackoverflow.design/product/components/cards/
 */
export function CardAdapter({ image, children }: CardProps) {
  return (
    <div className="s-card bs-sm">
      {children}
    </div>
  )
}