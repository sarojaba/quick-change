import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { RadioInput } from '@instructure/ui'

/**
 * @see https://instructure.design/#RadioInput
 */
export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <RadioInput
      name={name}
      label={label}
      value={value}
      checked={checked}
      disabled={disabled}
    />
  )
}