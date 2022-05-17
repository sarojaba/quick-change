import * as React from 'react'

import { useComponents } from '../providers'

export interface RadioGroupProps {
  name?: string,
  label?: string,
  value?: string,
  inline?: boolean,
  disabled?: boolean,
  onChange?: any,
  children: any
}

export function RadioGroup({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  const { RadioGroupAdapter } = useComponents()
  return (
    <RadioGroupAdapter
      name={name}
      label={label}
      value={value}
      inline={inline}
      disabled={disabled}
      onChange={onChange}
    >
      {children}
    </RadioGroupAdapter>
  )
}
