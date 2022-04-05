import * as React from 'react'

import { ChoiceGroup } from '@fluentui/react'

export function RadioGroupAdapter({ name, value, children }) {
  const options = React.Children.map(children, child => {
    const { value, label, disabled } = child.props
    return {
      key: value,
      text: label,
      disabled: disabled
    }
  })

  return (
    <ChoiceGroup options={options} label={name}>{children}</ChoiceGroup>
  )
}
