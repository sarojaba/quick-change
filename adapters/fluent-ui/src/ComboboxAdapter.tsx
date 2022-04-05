import * as React from 'react'

import { ComboboxProps } from '@quick-change/core'

import { ComboBox } from '@fluentui/react'

export function ComboboxAdapter({ label, value, children }: ComboboxProps) {
  const options = React.Children.map(children, child => {
    const { value, disabled, children } = child.props
    return {
      key: value,
      text: children,
      disabled: disabled
    }
  })

  return (
    <ComboBox
      options={options}
    />
  )
}
