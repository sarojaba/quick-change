import * as React from 'react'

import { IconProps } from '@quick-change/core'

import { Icon } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/other/icon
 */
export function IconAdapter({ name, type, size }: IconProps) {
  return (
    <Icon source={name} />
  )
}

function sourceByName(name) {
  switch (name) {
    case 'arrow-up':
    case 'arrow-down':
    case 'arrow-left':
    case 'arrow-right':
      return name
    case 'home':
      return 'house'
    case 'info':
    case 'success':
    case 'warning':
    case 'danger':
      return undefined
    default:
      // return `Not supported: ${name}`
      return undefined
  }
}