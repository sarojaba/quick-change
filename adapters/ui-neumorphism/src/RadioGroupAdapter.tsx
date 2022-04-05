import * as React from 'react'

import { RadioGroupProps } from '@quick-change/core'

import { RadioGroup } from 'ui-neumorphism'

export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  return (
    <RadioGroup
      value={value}
      color="var(--primary)"
      vertical={!inline}>
      {children}
    </RadioGroup>
  )
}