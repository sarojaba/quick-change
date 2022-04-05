import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import { Textarea } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/textarea
 */
export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <Textarea
      value={value}
      placeholder={placeholder}
      rows={rows}
      isDisabled={disabled}
    />
  )
}