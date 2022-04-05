import * as React from 'react'

import { SelectItemProps } from '@quick-change/core'

/**
 * @see https://design.wonderflow.ai/components/inputs/select
 */
export function SelectItemAdapter({ value, selected, children }: SelectItemProps) {
  return (
    <option value={value}>
      {children}
    </option>
  )
}