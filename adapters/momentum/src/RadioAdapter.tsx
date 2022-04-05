import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { Radio } from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/radio
 */
export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <Radio
      label={label}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}