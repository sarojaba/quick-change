import * as React from 'react'

import { ComboboxProps } from '@quick-change/core'

import { ComboBox } from 'gestalt'

/**
 * @see https://gestalt.pinterest.systems/combobox
 */
export function ComboboxAdapter({ label, value, children }: ComboboxProps) {
  const options = React.Children.map(children, child => {
    return {
      label: child.props.children,
      value: child.props.children
    }
  })

  return (
    <ComboBox
      id={undefined}
      label={label}
      accessibilityClearButtonLabel={undefined}
      options={options}
      noResultText={undefined}
    >
      {children}
    </ComboBox>
  )
}