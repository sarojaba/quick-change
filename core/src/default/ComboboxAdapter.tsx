import * as React from 'react'

import { ComboboxProps } from '../interfaces'

/**
 * @see 
 */
export function ComboboxAdapter({ label, value, children }: ComboboxProps) {  
  return (
    <div>{children}</div>
  )
}