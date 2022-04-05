import * as React from 'react'

import { Radio } from 'ui-neumorphism'

export function RadioAdapter({ name, value, label, checked, disabled, onChange }: any) {
  return (
    <Radio
      value={value} label={label}
      checked={checked} disabled={disabled}
    />
  )
}
