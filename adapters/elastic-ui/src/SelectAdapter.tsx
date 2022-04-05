import * as React from 'react'

import { SelectProps } from '@quick-change/core'

import { EuiSelect, useGeneratedHtmlId } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/forms/form-controls#select
 */
export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  const basicSelectId = useGeneratedHtmlId({ prefix: 'basicSelect' })

  const options = React.Children.map(children, child => {
    const { value, children } = child.props
    return {
      text: children,
      value: value
    }
  })

  return (
    <EuiSelect
      id={basicSelectId}
      options={options}
      value={value}
      disabled={disabled}
    />
  )
}