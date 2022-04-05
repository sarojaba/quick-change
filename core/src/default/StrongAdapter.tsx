import * as React from 'react'

import { StrongProps } from '../interfaces'

/**
 * @see 
 */
export function StrongAdapter({ children }: StrongProps) {
  return <strong>{children}</strong>
}