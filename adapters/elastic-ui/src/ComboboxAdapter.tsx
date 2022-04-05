import * as React from 'react'

import { ComboboxProps } from '@quick-change/core'

import { EuiComboBox } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/forms/combo-box
 */
export function ComboboxAdapter({ label, value, children }: ComboboxProps) {

  const options = React.Children.map(children, child => {
    return {
      label: child.props.children
    }
  })

  return (
    <EuiComboBox
      options={options}
    />
  )
}