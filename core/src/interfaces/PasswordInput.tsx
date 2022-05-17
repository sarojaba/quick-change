import * as React from 'react'

import { useComponents } from '../providers'

export interface PasswordInputProps {
  value: string,
  label: string,
  placeholder?: string,
  // size: oneOf(['small', 'medium', 'large']),
  size?: string,
  disabled: boolean,
  readOnly?: boolean,
  onChange?: any,
  onKeyDown?: any
}

export function PasswordInput({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {

  const { PasswordInputAdapter } = useComponents()

  return (
    <PasswordInputAdapter
      value={value}
      label={label}
      placeholder={placeholder}
      size={size}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}
