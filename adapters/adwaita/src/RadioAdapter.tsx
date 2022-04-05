import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { Radio } from 'web-toolkit'

/**
 * @see https://romgrk.github.io/web-toolkit/docs/component/radio
 */
export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <Radio
      label={label}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}