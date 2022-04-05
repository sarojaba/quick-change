import * as React from 'react'

import { GridProps } from '@quick-change/core'

export function GridAdapter({ responsive, gapless, children }: GridProps) {

  // By default, columns are only activated from tablet onwards.
  // This means columns are stacked on top of each other on mobile.
  const isResponsive = responsive ? '' : 'is-mobile'

  const isGapless = gapless ? 'is-gapless' : ''

  return (
    <div className={`columns ${isResponsive} ${isGapless}`}>{ children }</div>
  )
}
