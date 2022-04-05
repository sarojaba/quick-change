import * as React from 'react'

import { NumberInputProps } from '@quick-change/core'

import { NumberInput } from 'hds-react'

export function NumberInputAdapter({ value, placeholder, size, disabled, readOnly, onChange, onKeyDown }: NumberInputProps) {
  return (
    <NumberInput
      id={undefined}
      label={undefined}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}