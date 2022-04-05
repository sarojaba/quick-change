import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

/**
 * @see http://uiplay.jui.io/?p=forms
 * @param {*} param0 
 * @returns 
 */
export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <span className={`label ${classByType(type)}`}>{children}</span>
  )
}

function classByType(type) {
  switch (type) {
    case 'info':
    case 'success':
    case 'danger':
      return type
    default:
      return ''
  }
}