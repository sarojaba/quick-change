import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <div style={{ margin: '5px' }}>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        required
      />
    </div>
  )
}