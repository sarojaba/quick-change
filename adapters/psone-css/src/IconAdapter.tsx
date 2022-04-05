import * as React from 'react'

import { IconProps } from '@quick-change/core'

/**
 * @see 
 */
export function IconAdapter({ name, type, size }: IconProps) {
  return (
    <div style={{marginRight: '.1em'}}>
      <i className={`icon ${iconByName(name)}`} />
    </div>
  )
}

function iconByName(name) {
  switch (name) {
    case 'arrow-up':
    case 'arrow-down':
    case 'arrow-left':
    case 'arrow-right':
      return name
    case 'home':
      return 'psone'
    case 'info':
      return 'square'
    case 'success':
      return 'triangle'
    case 'warning':
      return 'circle'
    case 'danger':
      return 'x'
    default:
      // return `Not supported: ${name}`
      return 'psone'
  }
}