import * as React from 'react'

import { BadgeProps } from '@quick-change/core'

import { Badge } from '@supabase/ui'

export function BadgeAdapter({ type, count, onClick, children }: BadgeProps) {
  return (
    <Badge>{children}</Badge>
  )
}