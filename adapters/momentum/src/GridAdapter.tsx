import * as React from 'react'

import { GridProps } from '@quick-change/core'

/**
 * @see https://momentum.design/components/layout-grid
 */
export function GridAdapter({ responsive, gapless, children }: GridProps) {
  return (
    <div className="row">{children}</div>
  )
}
