import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { Label } from '@heathmont/moon-core'

export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <Label
      color={colorByType(type)}
      backgroundColor={bgColorByType(type)}>
      {children}
    </Label>
  )
}

function colorByType(type) {
  switch (type) {
    case 'secondary':
    case 'success':
    case 'warning':    
      return 'piccolo.100'
    case 'danger':
      return 'goten.100'
    default:
      return undefined
  }
}

/**
 * @see https://moon.io/colours
 * @param {*} type 
 * @returns 
 */
function bgColorByType(type) {
  switch (type) {
    case 'secondary':
      return 'trunks.100'
    case 'success':
      return 'roshi.100'
    case 'warning':
      return 'krillin.100'
    case 'danger':
      return 'chiChi.100'
    default:
      return undefined
  }
}