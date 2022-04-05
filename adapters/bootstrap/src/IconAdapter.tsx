import * as React from 'react'

import { IconProps } from '@quick-change/core'

export function IconAdapter({ name, type, size }: IconProps) {
  switch (name) {
    case 'arrow-up':
      return <i className="bi bi-arrow-up" />
    case 'arrow-down':
      return <i className="bi bi-arrow-down" />
    case 'arrow-left':
      return <i className="bi bi-arrow-left" />
    case 'arrow-right':
      return <i className="bi bi-arrow-right" />
    case 'home':
      return <i className="bi bi-house" />
    case 'info':
      return <i className="bi bi-info-circle" />
    default:
      return `Not supported: ${name}`
  }
}