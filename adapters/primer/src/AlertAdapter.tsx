import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Flash, StyledOcticon } from '@primer/react'

import { CheckIcon, XIcon } from '@primer/octicons-react'

/**
 * @see https://primer.style/react/Flash
 * @param {*} param0 
 * @returns 
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Flash variant={variantByType(type)}>
      {icon ? iconByType(type) : null}
      {title}
    </Flash>
  )
}

function variantByType(type) {
  switch (type) {
    case 'success':
    case 'warning':
    case 'danger':
      return type
    default:
      return 'default'
  }
}

function iconByType(type) {
  switch (type) {
    case 'success':
      return <StyledOcticon icon={CheckIcon} />
    case 'danger':
      return <StyledOcticon icon={XIcon} />
    case 'warning':
    default:
      return null
  }
}