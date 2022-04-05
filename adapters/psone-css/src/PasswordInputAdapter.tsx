import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

/**
 * @see 
 */
export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        className="input"
        type="password"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
      />
    </div>
  )
}