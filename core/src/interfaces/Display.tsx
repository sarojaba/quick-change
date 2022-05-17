import * as React from 'react'

import { useComponents } from '../providers'

export interface DisplayProps {
  size: any,
  children: any
}

export function Display({ size, children }: DisplayProps) {
  const { DisplayAdapter } = useComponents()

  return (
    <DisplayAdapter size={size}>{ children }</DisplayAdapter>
  )
}
