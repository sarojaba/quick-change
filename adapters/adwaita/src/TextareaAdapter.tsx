import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import { Textarea } from 'web-toolkit'

/**
 * @see https://romgrk.github.io/web-toolkit/docs/component/textarea
 */
export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <Textarea
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  )
}