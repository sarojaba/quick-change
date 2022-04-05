import * as React from 'react'

import { RadioGroupProps } from '@quick-change/core'

/**
 * @see https://style.monday.com/?path=/docs/inputs-radio-button--radio-button-in-items-list
 */
export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  
  const newChildren = React.Children.map(children, child => {
    return React.cloneElement(child, {
      disabled: disabled,
      onChange: onChange
    })
  })

  return (
    <div className="monday-style-radio-buttons_wrapper-column">
      <div>{label}</div>
      {newChildren}
    </div>
  )
}