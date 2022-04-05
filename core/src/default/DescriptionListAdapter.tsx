import * as React from 'react'

import { DescriptionListProps } from '../interfaces'

/**
 * @see 
 */
export function DescriptionListAdapter({ children }: DescriptionListProps) {
  return (
    <dl>{children}</dl>
  )
}
