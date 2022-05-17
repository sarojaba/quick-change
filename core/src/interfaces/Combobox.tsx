import * as React from 'react'

import { useComponents } from '../providers'

export interface ComboboxProps {
  label?: string,
  value?: any,
  children?: any
}

export function Combobox({ label, value, children }: ComboboxProps) {
  const { ComboboxAdapter } = useComponents()
  return (
    <ComboboxAdapter label={label} value={value}>
      {children}
    </ComboboxAdapter>
  )
}

/**
 * Sub components
 */
import { ComboboxItem } from './ComboboxItem'

Combobox.Item = ComboboxItem
