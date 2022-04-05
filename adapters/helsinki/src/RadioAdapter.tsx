import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { RadioButton } from 'hds-react'

export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <RadioButton
      id={undefined}
      label={label}
      checked={checked}
      disabled={disabled}
    />
  )
}