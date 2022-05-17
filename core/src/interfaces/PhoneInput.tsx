import * as React from 'react'

import { useComponents } from '../providers'

export interface PhoneInputProps {
  value: string,
  placeholder?: string,
  // size: oneOf(['small', 'medium', 'large']),
  size?: string,
  disabled: boolean,
  readOnly?: boolean,
  onChange?: any,
  onKeyDown?: any
}

export function PhoneInput({ value, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PhoneInputProps) {

  const { PhoneInputAdapter } = useComponents()

  return (
    <PhoneInputAdapter
      value={value}
      placeholder={placeholder}
      size={size}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}
