import * as React from 'react'

import { useComponents } from '../providers'

export interface ProgressProps {
  type: string,
  value: number,
  max: number,
  label: boolean,
  // size: oneOf(['small', 'medium', 'large'])
  size: string
}

export function Progress({ type, value, max, label, size }: ProgressProps) {
  const { ProgressAdapter } = useComponents()

  return (
    <ProgressAdapter
      type={type}
      value={value}
      max={max}
      label={label}
      size={size}
    />
  )
}
