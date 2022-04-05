import * as React from 'react'

import { IconProps } from '@quick-change/core'

export function IconAdapter({ name, type, size }: IconProps) {

  const typeClassName = type ? classNameByType(type) : ''

  if (children) {
    return (
      <span className="icon-text">
        <span className="icon">
          <i className={`${classNameByName(name)} ${typeClassName}`}></i>
        </span>
        <span>{children}</span>
      </span>
    )
  } else {
    return (
      <span className="icon">
        <i className={`${classNameByName(name)} ${typeClassName}`}></i>
      </span>
    )
  }
}

function classNameByName(name) {
  switch (name) {
    case 'arrow-up':
      return 'fas fa-arrow-up'
    case 'arrow-down':
      return 'fas fa-arrow-down'
    case 'arrow-left':
      return 'fas fa-arrow-left'
    case 'arrow-right':
      return 'fas fa-arrow-right'
    case 'home':
      return 'fas fa-home'
    case 'info':
      return 'fas fa-info-circle'
    default:
      return name
  }
}

function classNameByType(type) {
  switch (type) {
    case 'info':
      return 'has-text-info'
    case 'success':
      return 'has-text-success'
    case 'warning':
      return 'has-text-warning'
    case 'danger':
      return 'has-text-danger'
  }
}