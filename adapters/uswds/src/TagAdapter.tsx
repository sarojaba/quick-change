import * as React from 'react'

import { TagProps } from '@quick-change/core'

import { Tag } from '@trussworks/react-uswds'

export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  return <Tag>{children}</Tag>
}