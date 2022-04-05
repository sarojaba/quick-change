import * as React from 'react'

import { RadioUncontrolledProps } from '@quick-change/core'

import { Radio } from '@contentful/f36-components'

/**
 * @see 
 */
export function RadioUncontrolledAdapter({ label, defaultChecked, disabled, onChange }: RadioUncontrolledProps) {
  return (
    <Radio
      defaultChecked={defaultChecked}
      isDisabled={disabled}
      onChange={onChange}
    >
      {label}
    </Radio>
  )
}