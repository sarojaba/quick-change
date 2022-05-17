import * as React from 'react'

import { useComponents } from '../providers'

export interface SelectItemProps {
  value: string,
  selected?: boolean,
  children: string
}

export function SelectItem({ value, selected, children }: SelectItemProps) {
  const { SelectItemAdapter } = useComponents()

  return <SelectItemAdapter value={ value } selected={ selected }>
    { children }
  </SelectItemAdapter>
}
