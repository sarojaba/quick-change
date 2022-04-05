import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { Textfield } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/inputs/textfield
 */
export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <Textfield
      type="text"
      label={label}
      defaultValue={value}
      readOnly={readOnly}
      disabled={disabled}
      onChange={onChange}
    />
  )
}