import * as React from 'react'

import { PhoneInputProps } from '@quick-change/core'

import { PhoneInput } from 'hds-react'

export function PhoneInputAdapter({ value, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PhoneInputProps) {
  return (
    <PhoneInput
      id={undefined}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}