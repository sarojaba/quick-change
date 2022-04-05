import * as React from 'react'

import { IconProps } from '@quick-change/core'

import { Icon } from 'monday-ui-react-core'

import {
  MoveArrowUp, MoveArrowDown, MoveArrowLeft, MoveArrowRight,
  Home, Info, Check, Alert, Bug
} from 'monday-ui-react-core/dist/allIcons'

/**
 * @see https://style.monday.com/?path=/docs/media-icon--overview
 */
export function IconAdapter({ name, type, size }: IconProps) {
  return (
    <Icon
      iconType={Icon.type.SVG}
      icon={iconByName(name)}
      iconSize={sizeBySize(size)}
    />
  )
}

function iconByName(name) {
  switch (name) {
    case 'arrow-up':
      return MoveArrowUp
    case 'arrow-down':
      return MoveArrowDown
    case 'arrow-left':
      return MoveArrowLeft
    case 'arrow-right':
      return MoveArrowRight
    case 'home':
      return Home
    case 'info':
      return Info
    case 'success':
      return Check
    case 'warning':
      return Alert
    case 'danger':
      return Bug
    default:
      // return `Not supported: ${name}`
      return Home
  }
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return 8
    case 'medium':
      return 16
    case 'large':
      return 32
    default:
      return undefined
  }
}