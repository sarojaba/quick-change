import * as React from 'react'

import { PasswordInputProps } from '@quick-change/core'

import { Textfield } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/inputs/textfield
 */
export function PasswordInputAdapter({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {
  return (
    <Textfield
      type="password"
      label={label}
      defaultValue={value}
      readOnly={readOnly}
      disabled={disabled}
      onChange={onChange}
    />
  )
}