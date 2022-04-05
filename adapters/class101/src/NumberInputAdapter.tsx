import * as React from 'react'

import { NumberInputProps } from '@quick-change/core'

import { NumericInput } from '@class101/ui'

/**
 * @see https://ui.class101.dev/form-inputs/numeric-input
 */
export function NumberInputAdapter({ value, placeholder, size, disabled, readOnly, onChange, onKeyDown }: NumberInputProps) {
  return (
    <NumericInput
      // label={label}
      disabled={disabled}
    />
  )
}