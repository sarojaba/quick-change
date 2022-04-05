import * as React from 'react'

import { CheckboxUncontrolledProps } from '@quick-change/core'

import { Checkbox } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/checkbox
 */
export function CheckboxUncontrolledAdapter({ label, defaultChecked, disabled, onChange }: CheckboxUncontrolledProps) {
  return (
    <Checkbox
      defaultChecked={defaultChecked}
      isDisabled={disabled}
      onChange={onChange}
    >
      {label}
    </Checkbox>
  )
}