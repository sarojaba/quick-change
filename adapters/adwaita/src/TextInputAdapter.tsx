import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { Input } from 'web-toolkit'

/**
 * @see https://romgrk.github.io/web-toolkit/docs/component/input
 */
export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  )
}