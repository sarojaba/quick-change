import * as React from 'react'

import { DescriptionListTermProps } from '../interfaces'

/**
 * @see 
 */
export function DescriptionListTermAdapter({ children }: DescriptionListTermProps) {
  return (
    <dt>{children}</dt>
  )
}