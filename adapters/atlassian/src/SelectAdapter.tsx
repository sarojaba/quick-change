import * as React from 'react'

import { SelectProps } from '@quick-change/core'

import Select from '@atlaskit/select'

export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {

  const options = React.Children.map(children, child => {
    const { value, children } = child.props
    return {
      label: children,
      value: value
    }
  })

  return (
    <Select
      inputId="single-select-example"
      className="single-select"
      classNamePrefix="react-select"
      options={options}
      placeholder="Choose a city"
      isMulti={multiple}
      isDisabled={disabled}
    />
  )
}
