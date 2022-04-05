import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from 'evergreen-ui'

/**
 * @see https://evergreen.segment.com/components/checkbox
 */
export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox
      label={label}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}