import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

import ProgressBar  from '@atlaskit/progress-bar'

export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return isIndeterminate(value, max)
    ? <ProgressBar isIndeterminate />
    : <ProgressBar value={value / max} />
}

function isIndeterminate(value, max) {
  return value === undefined && max === undefined
}