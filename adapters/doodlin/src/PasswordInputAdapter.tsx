import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { Input } from 'doodlin-design-system'

/**
 * @see https://design.doodlin.co.kr/?path=/story/component-input--password-input
 */
export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <Input
      password
      value={value}
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}