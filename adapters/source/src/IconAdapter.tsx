import * as React from 'react'

import { IconProps } from '@quick-change/core'

import {
  SvgArrowDownStraight,
  SvgArrowLeftStraight,
  SvgArrowRightStraight,
  SvgArrowUpStraight
} from '@guardian/source-react-components'

export function IconAdapter({ name, type, size }: IconProps) {
  const Icon = iconByNameAndType(name, type)
  return (
    <Icon size={sizeBySize(size)} />
  )
}

function iconByNameAndType(name, type) {
  switch (name) {
    case 'arrow-up':
      return SvgArrowUpStraight
    case 'arrow-down':
      return SvgArrowDownStraight
    case 'arrow-left':
      return SvgArrowLeftStraight
    case 'arrow-right':
      return SvgArrowRightStraight
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
      return SvgArrowUpStraight
  }
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return 'xsmall'
    case 'medium':
      return 'small'
    case 'large':
      return 'medium'
    default:
      return undefined
  }
}