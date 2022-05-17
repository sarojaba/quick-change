import * as React from 'react'

import { useComponents } from '../providers'

export interface TextInputProps {
  name?: string,
  label: string,
  value: string,
  message?: string,
  // size: oneOf(['small', 'medium', 'large']),
  size?: string,
  disabled: boolean,
  readOnly?: boolean,
  placeholder?: string,
  onChange?: any,
  onKeyDown?: any
}

export function TextInput({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  const { TextInputAdapter } = useComponents()
  return (
    <TextInputAdapter
      name={name}
      label={label}
      value={value}
      message={message}
      size={size}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}
