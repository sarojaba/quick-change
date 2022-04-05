import * as React from 'react'

import { DisplayProps } from '@quick-change/core'

export function DisplayAdapter({ size, children }: DisplayProps) {
  return <div className={classNameBySize(size)}>{children}</div>
}

function classNameBySize(size) {
  switch (size) {
    case 'small':
      return 'show-for-small-only'
    case 'medium':
      return 'show-for-medium-only'
    case 'medium-up':
      return 'show-for-medium'
    case 'medium-down':
      return 'hide-for-medium'
    case 'large':
      return 'show-for-large-only'
  }
}