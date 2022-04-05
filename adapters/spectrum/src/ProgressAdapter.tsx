import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

import { ProgressBar } from '@adobe/react-spectrum'

export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  const props = {
    showValueLabel: label,
    isIndeterminate: value === undefined && max === undefined
  }

  return <ProgressBar value={value} maxValue={max} {...props} />
}