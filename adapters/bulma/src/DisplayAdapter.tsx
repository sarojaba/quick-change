import * as React from 'react'

import { DisplayProps } from '@quick-change/core'

export function DisplayAdapter({ size, children }: DisplayProps) {
  return <div className={classNameBySize(size)}>{children}</div>
}

function classNameBySize(size) {
  switch (size) {
    case 'small':
      return 'is-block-mobile is-hidden-tablet'
    case 'medium':
      return 'is-block-tablet-only is-hidden-mobile is-hidden-desktop'
    case 'medium-up':
      return 'is-block-tablet is-hidden-mobile'
    case 'medium-down':
      return 'is-block-mobile is-hidden-desktop'
    case 'large':
      return 'is-block-desktop is-hidden-touch'
  }
}