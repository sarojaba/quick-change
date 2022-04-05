import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { TextInput } from '@workday/canvas-kit-react'

/**
 * @see Design https://design.workday.com/components/inputs/text-input
 * @see Storybook https://workday.github.io/canvas-kit/?path=/docs/components-inputs-text-input-react--basic
 */
export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  )
}