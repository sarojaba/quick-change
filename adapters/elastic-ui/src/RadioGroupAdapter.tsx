import * as React from 'react'

import { RadioGroupProps } from '@quick-change/core'

import { EuiRadioGroup } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/forms/selection-controls#radio-group
 */
export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  const options = React.Children.map(children, (child, i) => {
    return {
      id: i.toString(),
      label: child.props.label
    }
  })

  return (
    <EuiRadioGroup
      options={options}
      idSelected={'0'}
      onChange={() => {}}
      name={name}
      legend={{
        children: label
      }}
      disabled={disabled}
    />
  )
}