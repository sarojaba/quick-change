import * as React from 'react'

import { IconProps } from '@quick-change/core'

import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  HomeIcon,
  InfoIcon,
  CheckCircleIcon,
  AlertIcon,
  CloseCircleIcon
} from '@class101/ui'

export function IconAdapter({ name, type, size }: IconProps) {

  const Icon = iconByNameAndType(name, type)
  return (
    <Icon size={sizeBySize(size)} />
  )
}

function iconByNameAndType(name, type) {
  switch (name) {
    case 'arrow-up':
      return ArrowUpIcon
    case 'arrow-down':
      return ArrowDownIcon
    case 'arrow-left':
      return ArrowLeftIcon
    case 'arrow-right':
      return ArrowRightIcon
    case 'home':
      return HomeIcon
    case 'info':
      return InfoIcon
    case 'success':
      return CheckCircleIcon
    case 'warning':
      return AlertIcon
    case 'danger':
      return CloseCircleIcon
    default:
      // return `Not supported: ${name}`
      return InfoIcon
  }
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return 16
    case 'large':
      return 48
    default:
      return undefined
  }
}