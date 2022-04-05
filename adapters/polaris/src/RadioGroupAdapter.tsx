import * as React from 'react'

import { RadioGroupProps } from '@quick-change/core'

import { ChoiceList } from '@shopify/polaris'

/**
 * @see https://polaris.shopify.com/components/forms/radio-button
 */
export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  const choices = React.Children.map(children, child => {
    return {
      label: child.props.label,
      value: child.props.value
    }
  })
  return (
    <ChoiceList
      title={label}
      choices={choices}
      selected={choices[0].value}
    />
  )
}