import * as React from 'react'

import { IconProps } from '@quick-change/core'

import {
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Home,
  Info
} from '@geist-ui/react-icons'

export function IconAdapter({ name, type, size }: IconProps) {

  const Icon = iconByName(name)  

  return <Icon color={colorByType(type)} size={sizeBySize(size)}/>
}

function iconByName(name) {
  switch (name) {
    case 'arrow-up':
      return ArrowUp
    case 'arrow-down':
      return ArrowDown
    case 'arrow-left':
      return ArrowLeft
    case 'arrow-right':
      return ArrowRight
    case 'home':
      return Home
    case 'info':
      return Info
    default:
      return `Not supported: ${name}`
  }
}

function colorByType(type) {
  switch (type) {
    case 'danger':
      return 'red'
    default:
      return undefined
  }
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return 20
    case 'large':
      return 36
    default:
      return 28
  }
}