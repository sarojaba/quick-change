import * as React from 'react'

import { ListItemProps } from '@quick-change/core'

/**
 * @see https://design.wonderflow.ai/components/typography/list
 */
export function ListItemAdapter({ children }: ListItemProps) {
  return (
    <li>{children}</li>
  )
}