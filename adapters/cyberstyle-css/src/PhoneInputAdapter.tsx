import * as React from 'react'

import { PhoneInputProps } from '@quick-change/core'

export function PhoneInputAdapter({ value, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PhoneInputProps) {
  return (
    <div className={`cybr-input-wrapper ${disabled ? 'cybr-input-disabled' : ''}`}>
      <input
        type="tel"
        className="cybr-input"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
      />
    </div>
  )
}