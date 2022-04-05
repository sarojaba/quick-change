import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/checkbox
 */
export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox
      isChecked={checked}
      isDisabled={disabled}
      onChange={onChange}
    >
      {label}
    </Checkbox>
  )
}