import * as React from 'react'

import { useComponents } from '../providers'

export interface CheckboxUncontrolledProps {
  label: string,
  defaultChecked: boolean,
  disabled: boolean,
  onChange: any
}

export function CheckboxUncontrolled({ label, defaultChecked, disabled, onChange }: CheckboxUncontrolledProps) {
  const { CheckboxUncontrolledAdapter } = useComponents()
  return (
    <CheckboxUncontrolledAdapter
      label={label}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}
