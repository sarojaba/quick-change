import * as React from 'react'

import { useComponents } from '../providers'

export interface RadioUncontrolledProps {
  label: string,
  defaultChecked: boolean,
  disabled: boolean,
  onChange: any
}

export function RadioUncontrolled({ label, defaultChecked, disabled, onChange }: RadioUncontrolledProps) {
  const { RadioUncontrolledAdapter } = useComponents()
  return (
    <RadioUncontrolledAdapter
      label={label}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}
