import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from '@atlaskit/checkbox'

export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox
      label={label}
      isChecked={checked}
      isDisabled={disabled}
    />
  )
}