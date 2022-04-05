import * as React from 'react'

import { NumberInputProps } from '@quick-change/core'

import { DuetNumberInput as NumberInput } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/number-input/
 */
export function NumberInputAdapter({ value, placeholder, size, disabled, readOnly, onChange, onKeyDown }: NumberInputProps) {
  return (
    <NumberInput
      value={value}
      onDuetChange={onChange}
    />
  )
}