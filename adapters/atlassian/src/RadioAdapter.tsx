import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { Radio } from '@atlaskit/radio'

/**
 * @see https://atlassian.design/components/radio
 */
export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <Radio
      name={name}
      value={value}
      label={label}
      isChecked={checked}
      isDisabled={disabled}
      onChange={onChange}
    />
  )
}