import * as React from 'react'

import { ComboboxProps } from '@quick-change/core'

import { ComboBox } from '@trussworks/react-uswds'

export function ComboboxAdapter({ label, value, children }: ComboboxProps) {
  const options = React.Children.map(children, child => {
    return {
      value: child.props.children,
      label: child.props.children
    }
  })

  return (
    <ComboBox
      id={undefined}
      name={undefined}
      options={options}
      onChange={undefined}
    />
  )
}