import * as React from 'react'

import { } from '@quick-change/core'

import { Radio } from '@guardian/source-react-components'

export function RadioAdapter({ name, value, label, checked, disabled, onChange }: any) {
  return (
    <Radio
      value={value}
      label={label}
      checked={checked}
      disabled={disabled}
    />
  )
}