import * as React from 'react'

import { TagProps } from '@quick-change/core'

import { Badge } from '@codecademy/gamut'

export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  return <Badge>{children}</Badge>
}