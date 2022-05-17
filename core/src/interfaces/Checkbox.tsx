import * as React from 'react'

import { useComponents } from '../providers'

export interface CheckboxProps {
  label?: string,
  checked?: boolean,
  disabled?: boolean,
  onChange?: any
}

export function Checkbox({ label, checked, disabled, onChange }: CheckboxProps) {
  const { CheckboxAdapter } = useComponents()
  return (
    <CheckboxAdapter
      label={label}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}

/**
 * Sub components
 */

import { CheckboxGroup } from './CheckboxGroup'
import { CheckboxUncontrolled } from './CheckboxUncontrolled'

Checkbox.Group = CheckboxGroup
Checkbox.Uncontrolled = CheckboxUncontrolled
