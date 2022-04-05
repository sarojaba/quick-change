import * as React from 'react'

import { RadioGroupProps } from '@quick-change/core'

import { RadioGroup, ALIGN } from 'baseui/radio'

export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  return (
    <RadioGroup
      align={inline ? ALIGN.horizontal : ALIGN.vertical}>
      {children}
    </RadioGroup>
  )
}