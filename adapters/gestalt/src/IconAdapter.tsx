import * as React from 'react'

import { IconProps } from '@quick-change/core'

import { Icon } from 'gestalt'

export function IconAdapter({ name, type, size }: IconProps) {
  return (
    <Icon icon={iconByName(name)} accessibilityLabel={name} />
  )
}

function iconByName(name) {
  switch (name) {
    case 'arrow-up':
      return 'sort-ascending'
    case 'arrow-down':
      return 'sort-descending'
    case 'arrow-left':
      return 'directional-arrow-left'
    case 'arrow-right':
      return 'directional-arrow-right'
    case 'home':
    case 'info':
    case 'success':
    case 'warning':
    case 'danger':
    default:
      // return `Not supported: ${name}`
      return null
  }
}
