import * as React from 'react'

import { SelectItemProps } from '@quick-change/core'

import { SelectOption } from '@workday/canvas-kit-react'

/**
 * @see 
 */
export function SelectItemAdapter({ value, selected, children }: SelectItemProps) {
  return (
    <SelectOption label={children} value={value} />
  )
}