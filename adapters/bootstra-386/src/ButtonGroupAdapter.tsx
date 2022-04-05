import * as React from 'react'

import { ButtonGroupProps } from '@quick-change/core'

export function ButtonGroupAdapter({ vertical, children }: ButtonGroupProps) {
  return (
    <div className="bs-component">{children}</div>
  )
}