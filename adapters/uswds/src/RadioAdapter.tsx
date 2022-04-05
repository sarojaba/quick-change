import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { Radio } from '@trussworks/react-uswds'

export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <Radio id={undefined} name={undefined} label={label} />
  )
}