import * as React from 'react'

import { useComponents } from '../providers'

export interface RadioProps {
  name?: string,
  value?: any,
  label?: string,
  checked?: boolean,
  disabled?: boolean,
  onChange?: any
}

export function Radio({ name, value, label, checked, disabled, onChange }: RadioProps) {
  const { RadioAdapter } = useComponents()
  return (
    <RadioAdapter
      name={name}
      value={value}
      label={label}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}

/**
 * Sub components
 */
import { RadioGroup } from './RadioGroup'
import { RadioUncontrolled } from './RadioUncontrolled'

Radio.Group = RadioGroup
Radio.Uncontrolled = RadioUncontrolled
