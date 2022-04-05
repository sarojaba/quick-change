import * as React from 'react'

import { PhoneInputProps } from '../interfaces'

/**
 * @see 
 */
export function PhoneInputAdapter({ value, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PhoneInputProps) {
  return (
    <input
      type="tel"
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}