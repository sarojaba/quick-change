import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import { Textfield } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/inputs/textfield
 */
export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <Textfield
      textarea
      label={label}
      defaultValue={value}
      disabled={disabled}
    />
  )
}