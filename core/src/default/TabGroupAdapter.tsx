import * as React from 'react'

import { TabGroupProps } from '../interfaces'

/**
 * @see 
 */
export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  return <div>{children}</div>
}