import * as React from 'react'

import { DisplayProps } from '@quick-change/core'

export function DisplayAdapter({ size, children }: DisplayProps) {
  return <div>{children}</div>
}