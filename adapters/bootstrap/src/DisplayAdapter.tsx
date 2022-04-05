import * as React from 'react'

import { DisplayProps } from '@quick-change/core'

export function DisplayAdapter({ size, children }: DisplayProps) {
  return <div className={classNameBySize(size)}>{children}</div>
}

function classNameBySize(size) {
  switch (size) {
    case 'small':
      return 'd-block d-md-none'
    case 'medium':
      return 'd-none d-md-block d-lg-none'
    case 'medium-up':
      return 'd-none d-md-block'
    case 'medium-down':
      return 'd-md-block d-lg-none'
    case 'large':
      return 'd-none d-lg-block'
  }
}