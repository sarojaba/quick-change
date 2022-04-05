import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from '@geist-ui/core'

export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {  
  return (
    <Checkbox
      checked={checked}
      disabled={disabled}>
      {label}
    </Checkbox>
  )
}
