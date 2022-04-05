import * as React from 'react'

import { SelectProps } from '@quick-change/core'

import { Select } from 'grommet'

export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  const options = React.Children.map(children, child => {
    return child.props.children
  })
  return (
    <Select
      options={options}
      onChange={onChange}
    />
  )
}