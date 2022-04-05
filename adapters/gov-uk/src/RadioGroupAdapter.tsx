import * as React from 'react'

import { RadioGroupProps } from '@quick-change/core'

export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {

  const newChildren = React.Children.map(children, child => {
    return React.cloneElement(child, {name: name})
  })

  return newChildren
}