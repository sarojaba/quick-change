import * as React from 'react'

import { CheckboxGroupProps } from '@quick-change/core'

import { EuiCheckboxGroup } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/forms/selection-controls#checkbox-group
 */
export function CheckboxGroupAdapter({ label, inline, children, onChange }: CheckboxGroupProps) {
  const options = React.Children.map(children, (child, i) => {
    return {
      id: i.toString(),
      label: child.props.label
    }
  })

  console.log('group')

  return (
    <EuiCheckboxGroup
      options={options}
      idToSelectedMap={{'0': true, '1': false}}
      onChange={onChange}
    />
  )
}