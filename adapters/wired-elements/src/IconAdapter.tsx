import * as React from 'react'

import { IconProps } from '@quick-change/core'

import { WiredIconButton } from 'react-wired-elements'

export function IconAdapter({ name, type, size }: IconProps) {
  return <WiredIconButton icon={iconByName(name)} />
}

function iconByName(name) {
  switch (name) {
    case 'arrow-up':
      return 'arrow_upward'
    case 'arrow-down':
      return 'arrow_downward'
    case 'arrow-left':
      return 'arrow_back'
    case 'arrow-right':
      return 'arrow_forward'
    case 'home':
      return 'home'
    case 'info':
      return 'info'
    case 'success':
      return 'check_circle'
    case 'warning':
      return 'warning'
    case 'danger':
      return 'error'
    default:
      return `Not supported: ${name}`
  }
}