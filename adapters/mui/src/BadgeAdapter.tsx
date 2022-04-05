import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { Chip } from '@mui/material'

export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return <Chip label={children} color={type} onClick={onClick} />
}