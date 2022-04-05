import * as React from 'react'

import { ProgressProps } from '../interfaces'

/**
 * @see 
 */
export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return <progress value={value} max={max} />
}