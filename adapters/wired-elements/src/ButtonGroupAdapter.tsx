import * as React from 'react'

import { ButtonGroupProps } from '@quick-change/core'

export function ButtonGroupAdapter({ vertical, children }: ButtonGroupProps) {
  const style = vertical
    ? { display: 'flex', flexDirection: 'column' }
    : undefined

  return <div style={style}>{children}</div>
}