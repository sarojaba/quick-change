import * as React from 'react'

import { ContainerProps } from '@quick-change/core'

export function ContainerAdapter({ breakpoint, align, children }: ContainerProps) {
  return (
    <div className="rpgui-container framed user-fixed">{children}</div>
  )
}