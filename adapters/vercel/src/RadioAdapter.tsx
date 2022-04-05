import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { Radio } from '@geist-ui/core'

export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {  
  return (
    <Radio checked={checked}>{label}</Radio>
  )
}