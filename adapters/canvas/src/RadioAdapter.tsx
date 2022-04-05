import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { Radio } from '@workday/canvas-kit-react'

/**
 * @see Design https://design.workday.com/components/inputs/radio-buttons
 * @see Storybook https://workday.github.io/canvas-kit/?path=/docs/components-inputs-radio-react--basic
 */
export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <Radio
      label={label}
      value={value}
      checked={checked}
      disabled={disabled}
    />
  )
}