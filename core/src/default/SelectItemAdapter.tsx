import * as React from 'react'

import { SelectItemProps } from '../interfaces'

/**
 * @see 
 */
export function SelectItemAdapter({ value, selected, children }: SelectItemProps) {
  return (
    <option value={value} selected={selected}>
      {children}
    </option>
  )
}