import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

/**
 * @see https://momentum.design/components/layout-grid
 */
export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <div className={`columns small-${span} medium-${span} large-${span} large-offset-${offset}`}>
      {children}
    </div>
  )
}
