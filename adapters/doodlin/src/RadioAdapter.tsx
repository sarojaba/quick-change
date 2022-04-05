import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { Radio } from 'doodlin-design-system'

/**
 * @see https://design.doodlin.co.kr/?path=/story/component-radio--default
 */
export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <Radio
      label={label}
      selected={checked}
      disabled={disabled}
      onClick={onChange}
    />
  )
}