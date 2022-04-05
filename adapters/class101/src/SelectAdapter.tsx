import * as React from 'react'

import { SelectProps } from '@quick-change/core'

import { Select } from '@class101/ui'

/**
 * @see https://ui.class101.dev/form-inputs/select
 */
export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {

  const options = React.Children.map(children, child => {
    return {
      label: child.props.children,
      value: child.props.value
    }
  })

  return (
    <Select
      value={value}
      // placeholder={placeholder}
      options={options}
    />
  )
}