import * as React from 'react'

import { useComponents, ScopeProvider } from '../providers'

export interface SelectProps {
  name: string,
  label: string,
  size: string,
  multiple: boolean,
  rows: number,
  disabled: boolean,
  value: string,
  onValueChange: any,
  children: any
}

export function Select({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {

  const { SelectAdapter } = useComponents()
  
  return (
    <SelectAdapter
      name={name} label={label}
      size={ size } multiple={ multiple }
      rows = { rows } disabled={ disabled } value={ value }
      onValueChange={ onValueChange }
    >
      <ScopeProvider scope="select">
        {children}
      </ScopeProvider>
    </SelectAdapter>
  )
}

/**
 * Sub components
 */
import { SelectItem } from './SelectItem'

Select.Item = SelectItem
