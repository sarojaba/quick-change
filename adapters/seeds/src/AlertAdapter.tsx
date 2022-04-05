import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Banner } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/banner
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Banner
      text={title}
      type={typeByType(type)}
    />
  )
}

function typeByType(type) {
  switch (type) {
    case 'info':
    case 'success':
    case 'warning':
      return type
    case 'danger':
      return 'error'
    default:
      return undefined
  }
}