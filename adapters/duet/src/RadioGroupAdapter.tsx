import * as React from 'react'

import { RadioGroupProps } from '@quick-change/core'

import { DuetRadioGroup as RadioGroup } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/radio/
 */
export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  return (
    <RadioGroup
      name={name}
      label={label}
      value={value}
      direction={inline ? 'horizontal' : undefined}
      disabled={disabled}
    >
      {children}
    </RadioGroup>
  )
}