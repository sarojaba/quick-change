import * as React from 'react'

import { RadioGroupProps } from '@quick-change/core'

import { RadioGroup } from '@atlaskit/radio'

/**
 * @see https://atlassian.design/components/radio/radio-group
 */
export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {

  const options = React.Children.map(children, (child, i) => {
    return {
      name: name,
      value: child.props.value,
      label: child.props.label
    }
  })

  return (
    <RadioGroup
      options={options}
      value={value}
      isDisabled={disabled}
      onChange={e => onChange(e.target.value)}
    />
  )
}