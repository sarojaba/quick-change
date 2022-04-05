import * as React from 'react'

import { GridProps } from '@quick-change/core'

export function GridAdapter({ responsive, gapless, children }: GridProps) {
  return <div className="grid">{ children }</div>
}
