import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { Radio } from 'baseui/radio'

export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <Radio value={value}>{label}</Radio>
  )
}