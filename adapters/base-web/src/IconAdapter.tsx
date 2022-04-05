import * as React from 'react'

import { IconProps } from '@quick-change/core'

import {
  ArrowUp,
  ArrowRight,
  ArrowDown,
  ArrowLeft,
  Blank
} from 'baseui/icon'

export function IconAdapter({ name, type, size }: IconProps) {

  const Icon = iconByNameAndType(name, type)

  return (
    <Icon />
  )
}

function iconByNameAndType(name, type) {
  switch (name) {
    case 'arrow-up':
      return ArrowUp
    case 'arrow-down':
      return ArrowDown
    case 'arrow-left':
      return ArrowLeft
    case 'arrow-right':
      return ArrowRight
    // case 'home':
    //   return HomeOutlined
    // case 'info':
    //   return type ? InfoCircleTwoTone : InfoCircleOutlined
    // case 'success':
    //   return type ? CheckCircleTwoTone : CheckCircleOutlined
    // case 'warning':
    //   return type ? ExclamationCircleTwoTone : ExclamationCircleOutlined
    // case 'danger':
    //   return type ? CloseCircleTwoTone : CloseCircleOutlined
    default:
      // return `Not supported: ${name}`
      // return InfoCircleOutlined
      return Blank
  }
}