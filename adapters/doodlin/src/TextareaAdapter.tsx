import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import { Textarea } from 'doodlin-design-system'

/**
 * @see https://design.doodlin.co.kr/?path=/story/component-input--input-textarea
 */
export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <Textarea
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
    />
  )
}