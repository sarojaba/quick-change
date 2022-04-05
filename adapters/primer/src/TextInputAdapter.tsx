import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { TextInput } from '@primer/react'

export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <TextInput value={value} placeholder={placeholder} />
  )
}