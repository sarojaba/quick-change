import * as React from 'react'

import { useComponents } from '../providers'

export interface SpinnerProps {
  // size: oneOf(['small', 'medium', 'large'])
  size: string
}

export function Spinner({ size }: SpinnerProps) {
  const { SpinnerAdapter } = useComponents()
  return (
    <SpinnerAdapter size={size} />
  )
}