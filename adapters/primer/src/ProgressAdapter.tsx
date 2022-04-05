import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

import { ProgressBar } from '@primer/react'

/**
 * @see https://primer.style/react/ProgressBar
 * @param {*} param0 
 * @returns 
 */
export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return <>
    <ProgressBar progress={value} />
  </>
}