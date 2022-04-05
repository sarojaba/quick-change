import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import { DuetTextarea as Textarea } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/textarea/
 */
export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <Textarea
      label={label}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onDuetChange={onChange}
    />
  )
}