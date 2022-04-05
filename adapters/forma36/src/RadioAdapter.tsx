import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { Radio } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/radio
 */
export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <Radio
      name={name}
      value={value}
      isChecked={checked}
      onChange={onChange}
    >
      {label}
    </Radio>
  )
}