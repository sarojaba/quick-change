import * as React from 'react'

import { useComponents } from '../providers'

export interface ComboboxItemProps {
  children: any
}

export function ComboboxItem({ children }: ComboboxItemProps) {
  const { ComboboxItemAdapter } = useComponents()
  return (
    <ComboboxItemAdapter>{children}</ComboboxItemAdapter>
  )
}
