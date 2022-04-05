import * as React from 'react'

import { SelectProps } from '@quick-change/core'

import { DuetSelect as Select } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/select/
 */
export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {

  const items = React.Children.map(children, child => {
    return {
      label: child.props.children,
      value: child.props.value
    }
  })

  return (
    <Select
      label={label}
      items={items}
      disabled={disabled}
      onDuetChange={onValueChange}
    >
      {children}
    </Select>
  )
}