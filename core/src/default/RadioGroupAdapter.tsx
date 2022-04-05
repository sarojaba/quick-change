import * as React from 'react'

import { RadioGroupProps } from '../interfaces'

/**
 * @see 
 */
export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {

  const newChildren = React.Children.map(children, child => {
    return React.cloneElement(child, { onChange: onChange })
  })
  
  return (
    <div>{newChildren}</div>
  )
}