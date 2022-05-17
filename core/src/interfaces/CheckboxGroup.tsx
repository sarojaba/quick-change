import * as React from 'react'

import { useComponents } from '../providers'

export interface CheckboxGroupProps {
  label?: string,
  inline?: boolean,
  children: any,
  onChange?: any
}

export function CheckboxGroup({ label, inline, children, onChange }: CheckboxGroupProps) {
  const { CheckboxGroupAdapter } = useComponents()
  return (
    <CheckboxGroupAdapter label={label} inline={inline} onChange={onChange}>
      {children}
    </CheckboxGroupAdapter>
  )
}
