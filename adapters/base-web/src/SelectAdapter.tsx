import * as React from 'react'

import { SelectProps } from '@quick-change/core'

import { Select } from 'baseui/select'

/**
 * @see https://baseweb.design/components/select
 */
export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {

  const options = React.Children.map(children, child => {
    return { label: child.props.children, id: child.props.children }
  })

  return (
    <Select
      options={options}
      value={value}
      // placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  )
}
