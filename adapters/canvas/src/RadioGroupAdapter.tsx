import * as React from 'react'

import { RadioGroupProps } from '@quick-change/core'

import { RadioGroup } from '@workday/canvas-kit-react'

/**
 * @see Design https://design.workday.com/components/inputs/radio-buttons
 * @see Storybook https://workday.github.io/canvas-kit/?path=/docs/components-inputs-radio-react--basic
 */
export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  return (
    <RadioGroup
      name={name}
      value={value}
      onChange={onChange}
    >
      {children}
    </RadioGroup>
  )
}