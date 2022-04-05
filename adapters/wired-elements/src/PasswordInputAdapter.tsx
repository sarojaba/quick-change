import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { WiredInput } from 'react-wired-elements'

/**
 * @see https://react-wired-elements.netlify.app/?path=/story/wiredinput--default
 */
export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <WiredInput
      type="password"
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  )
}