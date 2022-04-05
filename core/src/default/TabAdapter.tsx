import * as React from 'react'

import { TabProps } from '../interfaces'

/**
 * @see 
 */
export function TabAdapter({ id, title, href, active, disabled, children }: TabProps) {
  return <div>{children}</div>
}
