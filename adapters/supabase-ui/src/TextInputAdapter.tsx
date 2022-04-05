import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { Input } from '@supabase/ui'

export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <Input
      label={label}
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}