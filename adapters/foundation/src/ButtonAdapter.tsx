import React, { Fragment } from 'react'

import { ButtonProps, ButtonGroupProps } from '@quick-change/core'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return <>
    <button type="button"
      className={classNameByAttrs(type, size, shape)}
      disabled={disabled}
      onClick={onClick}>
      { children }
    </button>
  </>
}

function classNameByAttrs(type, size, shape) {
  let baseClassName = 'button'

  const typeClassName = classNameByType(type)
  if (typeClassName) {
    baseClassName += ` ${typeClassName}`
  }

  const sizeClassName = classNameBySize(size)
  if (sizeClassName) {
    baseClassName += ` ${sizeClassName}`
  }

  const outlineClassName = classNameByOutline(shape === 'outline')
  if (outlineClassName) {
    baseClassName += ` ${outlineClassName}`
  }

  return baseClassName
}

function classNameByType(type) {
  switch(type) {
    case undefined:
      return null
    case 'primary':
    case 'secondary':
    case 'success':
    case 'warning':
      return type
    case 'danger':
      return 'alert'
    default:
      console.warn(`Foundation doesn't support this button type: '${type}'.`)
      return null
  }
}

function classNameBySize(size) {
  switch(size) {
    case 'small':
      return 'small'
    case 'large':
      return 'large'
    case 'medium':
    case undefined:
      return undefined
    default:
      throw Error(`Not supported size: ${size}`)
  }
}

function classNameByOutline(outline) {
  return outline ? 'hollow' : null
}
