import * as React from 'react'

import { CheckboxGroupProps } from '@quick-change/core'

import { CheckBoxGroup } from 'grommet'

/**
 * @see https://design-system.hpe.design/components/checkboxgroup
 */
export function CheckboxGroupAdapter({ label, inline, children, onChange }: CheckboxGroupProps) {
  const options = React.Children.map(children, child => {
    return child.props.label
  })

  return (
    <CheckBoxGroup options={options} />
  )
}