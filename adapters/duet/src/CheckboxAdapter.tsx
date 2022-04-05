import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { DuetCheckbox as Checkbox } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/checkbox/
 */
export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox
      label={label}
      checked={checked}
      disabled={disabled}
      onDuetChange={onChange}
    />
  )
}