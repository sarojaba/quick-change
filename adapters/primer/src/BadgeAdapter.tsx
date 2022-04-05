import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { Label } from '@primer/react'

/**
 * @see https://primer.style/react/Label
 * @param {*} param0 
 * @returns 
 */
export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <Label>{children}</Label>
  )
}