import * as React from 'react'

import { RadioGroupProps } from '@quick-change/core'

import { RadioButtonGroup } from 'grommet'

export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  const options = React.Children.map(children, child => {
    return child.props.children
  })

  return (
    <RadioButtonGroup
      name={name}
      options={options}
      value={value}
    />
  )
}