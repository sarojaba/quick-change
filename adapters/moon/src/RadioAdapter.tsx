import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { RadioButton } from '@heathmont/moon-core'

export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <RadioButton
      id={name} name={name}
      label={label} ariaLabel={label}
      checked={checked}
      disabled={disabled}
    />
  )
}