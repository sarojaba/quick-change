import * as React from 'react'

import { Radio } from 'govuk-react'

export function RadioAdapter({ name, value, label, checked, disabled, onChange }: any) {
  return (
    <Radio name={name} disabled={disabled}>
      {label}
    </Radio>
  )
}
