import * as React from 'react'

import { NumberInputProps } from '../interfaces'

/**
 * @see 
 */
export function NumberInputAdapter({ value, placeholder, size, disabled, readOnly, onChange, onKeyDown }: NumberInputProps) {
  return (
    <input
      type="number"
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}