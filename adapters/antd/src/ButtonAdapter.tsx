import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { Button } from 'antd'

/**
 * @see https://ant.design/components/button/
 */
export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {

  const props = propsByTypeAndShape(type, shape)

  return (
    <Button
      {...props}
      size={sizeBySize(size)}
      block={block}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </Button>
  )
}

function propsByTypeAndShape(type, shape) {
  switch (shape) {
    case undefined:
    case 'fill':
      return {
        type: type,
        ghost: false
      }
    case 'outline':
      return {
        type: type,
        ghost: type === 'primary' || type === 'danger'
      }
    case 'clear':
      return {
        type: 'text',
        ghost: undefined
      }
    default:
      return {}
  }
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return 'small'
    case 'medium':
      return 'middle'
    case 'large':
      return 'large'
    default:
      return undefined
  }
}