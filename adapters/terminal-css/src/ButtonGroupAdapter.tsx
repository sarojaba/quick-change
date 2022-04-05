import * as React from 'react'

import { ButtonGroupProps } from '@quick-change/core'

export function ButtonGroupAdapter({ vertical, children }: ButtonGroupProps) {
  return (
    <div className="btn-group">{children}</div>
  )
}