import * as React from 'react'

import { useComponents } from '../providers'

export interface TextareaProps {
  name: string,
  label: string,
  value: string,
  placeholder: string,
  message: string,
  rows: number,
  disabled: boolean,
  onChange: any
}

export function Textarea({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  const { TextareaAdapter } = useComponents()
  return (
    <TextareaAdapter
      name={name}
      label={label}
      value={value}
      placeholder={placeholder}
      message={message}
      rows={rows}
      disabled={disabled}
      onChange={onChange}
    />
  )
}
