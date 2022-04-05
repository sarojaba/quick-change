import * as React from 'react'

import { SelectProps } from '../interfaces'

/**
 * @see 
 */
export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  return (
    <select>{children}</select>
  )
}