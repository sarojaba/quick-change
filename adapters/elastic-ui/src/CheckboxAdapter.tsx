import * as React from 'react'

import { CheckboxProps, useCheckboxGroupScope } from '@quick-change/core'

import { EuiCheckbox, useGeneratedHtmlId } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/forms/selection-controls#checkbox
 */
export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  const basicCheckboxId = useGeneratedHtmlId({ prefix: 'basicCheckbox' })
  
  const isScope = useCheckboxGroupScope()
  if (isScope) {
    console.log('isScope')
    return null
  }

  return (
    <EuiCheckbox
      id={basicCheckboxId}
      label={label}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}