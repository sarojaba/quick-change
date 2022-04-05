import * as React from 'react'

import { NumberInputProps } from '@quick-change/core'

import { InputNumber } from 'web-toolkit'

/**
 * @see https://romgrk.github.io/web-toolkit/docs/component/inputnumber
 */
export function NumberInputAdapter({ value, placeholder, size, disabled, readOnly, onChange, onKeyDown }: NumberInputProps) {
  return (
    <InputNumber
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  )
}