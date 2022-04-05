import * as React from 'react'

import { DescriptionListDescriptionProps } from '../interfaces'

/**
 * @see 
 */
export function DescriptionListDescriptionAdapter({ children }: DescriptionListDescriptionProps) {
  return (
    <dd>{children}</dd>
  )
}
