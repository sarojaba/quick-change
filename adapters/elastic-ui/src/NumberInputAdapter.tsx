import * as React from 'react'

import { NumberInputProps } from '@quick-change/core'

import { EuiFieldNumber } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/forms/form-controls#number-field
 */
export function NumberInputAdapter({ value, placeholder, size, disabled, readOnly, onChange, onKeyDown }: NumberInputProps) {
  return (
    <EuiFieldNumber
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}