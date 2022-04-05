import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { FastButton } from './components'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  return (
    <FastButton disabled={disabled} onClick={onClick}>{children}</FastButton>
  )
}
