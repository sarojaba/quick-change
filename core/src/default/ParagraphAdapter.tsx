import * as React from 'react'

import { ParagraphProps } from '../interfaces'

/**
 * @see 
 */
export function ParagraphAdapter({ children }: ParagraphProps) {
  return <p>{children}</p>
}