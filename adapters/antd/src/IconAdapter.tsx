import * as React from 'react'

import { IconProps } from '@quick-change/core'

import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  HomeOutlined,
  InfoCircleOutlined, InfoCircleTwoTone,
  CheckCircleOutlined, CheckCircleTwoTone,
  ExclamationCircleOutlined, ExclamationCircleTwoTone,
  CloseCircleOutlined, CloseCircleTwoTone
} from '@ant-design/icons'

export function IconAdapter({ name, type, size }: IconProps) {

  const Icon = iconByNameAndType(name, type)

  return (
    <Icon style={styleBySize(size)} twoToneColor={colorByType(type)}/>
  )
}

function iconByNameAndType(name, type) {
  switch (name) {
    case 'arrow-up':
      return ArrowUpOutlined
    case 'arrow-down':
      return ArrowDownOutlined
    case 'arrow-left':
      return ArrowLeftOutlined
    case 'arrow-right':
      return ArrowRightOutlined
    case 'home':
      return HomeOutlined
    case 'info':
      return type ? InfoCircleTwoTone : InfoCircleOutlined
    case 'success':
      return type ? CheckCircleTwoTone : CheckCircleOutlined
    case 'warning':
      return type ? ExclamationCircleTwoTone : ExclamationCircleOutlined
    case 'danger':
      return type ? CloseCircleTwoTone : CloseCircleOutlined
    default:
      // return `Not supported: ${name}`
      return InfoCircleOutlined
  }
}

function styleBySize(size) {
  switch (size) {
    case 'small':
      return { fontSize: '50%' }    
    case 'large':
      return { fontSize: '200%' }
    case 'medium':
    default:
      return { fontSize: '100%' }
  }
}

function colorByType(type) {
  switch (type) {
    case 'success':
      return '#52c41a'
    case 'danger':
      return '#eb2f96'
    default:
      return undefined
  }
}