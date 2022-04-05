import * as React from 'react'

import { Textarea } from '@geist-ui/core'

export function TextareaAdapter({ name, label, placeholder, rows, disabled }) {
  return (
    <Textarea placeholder={placeholder} disabled={disabled} />
  )
}