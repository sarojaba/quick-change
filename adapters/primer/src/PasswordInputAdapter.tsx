import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { TextInput } from '@primer/react'

export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <TextInput type="password" value={value} placeholder={placeholder} />
  )
}