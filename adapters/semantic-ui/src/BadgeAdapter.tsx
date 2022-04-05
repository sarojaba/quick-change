import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { Label } from 'semantic-ui-react'

export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <Label>{children}</Label>
  )
}