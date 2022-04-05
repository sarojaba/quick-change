import * as React from 'react'

import { CaptionProps } from '../interfaces'

/**
 * @see 
 */
export function CaptionAdapter({ children }: CaptionProps) {
  return (
    <caption>{children}</caption>
  )
}