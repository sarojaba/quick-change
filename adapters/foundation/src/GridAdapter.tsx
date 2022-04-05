import * as React from 'react'

import { GridProps } from '@quick-change/core'

export function GridAdapter({ responsive, gapless, children }: GridProps) {

  const classNameByGapless = gapless ? '' : 'grid-margin-x'

  return (
    <div className={`grid-x ${classNameByGapless}`}>{ children }</div>
  )
}
