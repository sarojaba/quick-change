import * as React from 'react'

import { useComponents } from '../providers'

export interface NumberInputProps {
  value: string,
  placeholder?: string,
  // size: oneOf(['small', 'medium', 'large']),
  size?: string,
  disabled?: boolean,
  readOnly?: boolean,
  onChange?: any,
  onKeyDown?: any
}

export function NumberInput({ value, placeholder, size, disabled, readOnly, onChange, onKeyDown }: NumberInputProps) {

  const { NumberInputAdapter } = useComponents()

  return (
    <NumberInputAdapter
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
