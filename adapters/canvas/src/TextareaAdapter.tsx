import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import { TextArea } from '@workday/canvas-kit-react'

/**
 * @see https://workday.github.io/canvas-kit/?path=/docs/preview-inputs-text-area-react--basic
 */
export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <TextArea
      value={value}
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}