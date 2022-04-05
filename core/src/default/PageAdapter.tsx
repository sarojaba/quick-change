import * as React from 'react'

import { PageProps } from '../interfaces'

/**
 * @see 
 */
export function PageAdapter({ children }: PageProps) {
  return <main>{children}</main>
}