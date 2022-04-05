import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from 'doodlin-design-system'

/**
 * @see https://design.doodlin.co.kr/?path=/story/component-checkbox--default
 */
export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox
      label={label}
      selected={checked}
      disabled={disabled}
      onClick={onChange}
    />
  )
}