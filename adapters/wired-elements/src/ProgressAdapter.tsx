import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

import { WiredProgress } from 'react-wired-elements'

import { SpinnerAdapter } from './SpinnerAdapter'

export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return value === undefined && max === undefined
    ? <SpinnerAdapter />
    : <WiredProgress value={value} max={max} showPercentage={label} />
}