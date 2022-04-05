import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
   return (
    <input
      type="text"
      className="input-block"
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
    />
   )
}