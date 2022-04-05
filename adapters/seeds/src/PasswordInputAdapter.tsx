import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { Input } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/input
 */
export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <Input
      type="password"
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      disabled={disabled}
      onChange={onChange}
    />
  )
}