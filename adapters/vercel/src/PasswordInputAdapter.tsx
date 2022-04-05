import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { Input } from '@geist-ui/core'

/**
 * @see https://geist-ui.dev/en-us/components/input#password
 */
export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <Input.Password initialValue={value}>
      {label}
    </Input.Password>
  )
}