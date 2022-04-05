import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <div className={`cybr-input-wrapper ${disabled ? 'cybr-input-disabled' : ''}`}>
      <input
        type="text"
        className="cybr-input"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        required
      />
    </div>
  )
}