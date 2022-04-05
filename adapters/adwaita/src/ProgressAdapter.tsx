import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

import { Progress } from 'web-toolkit'

/**
 * @see https://romgrk.github.io/web-toolkit/docs/component/progress
 */
export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return (
    <Progress value={value} label={label} />
  )
}