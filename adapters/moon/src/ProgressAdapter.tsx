import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

import { ProgressLinear } from '@heathmont/moon-components'

export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return (
    <ProgressLinear
      value={value}
      text={label ? <span>{`${value}%`}</span> : undefined}
      backgroundColor="hit.100"
    />
  )
}