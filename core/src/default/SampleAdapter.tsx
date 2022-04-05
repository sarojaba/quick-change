import * as React from 'react'

import { SampleProps } from '../interfaces'

/**
 * @see 
 */
export function SampleAdapter({ children }: SampleProps) {
  return <samp>{children}</samp>
}