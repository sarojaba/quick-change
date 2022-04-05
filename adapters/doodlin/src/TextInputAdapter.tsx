import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { Input } from 'doodlin-design-system'

/**
 * @see https://design.doodlin.co.kr/?path=/story/component-input--default
 */
export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      errorMessage={message}
    />
  )
}