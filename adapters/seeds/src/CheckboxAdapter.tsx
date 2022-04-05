import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/checkbox
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