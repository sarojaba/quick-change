import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

import { ProgressBar, Text } from '@instructure/ui'

/**
 * @see https://instructure.design/#ProgressBar
 */
export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return (
    <ProgressBar
      screenReaderLabel={undefined}
      meterColor={meterColorByType(type)}
      size={size}
      valueNow={value}
      valueMax={max}
      renderValue={label ? renderValue : undefined}
    />
  )
}

function meterColorByType(type) {
  switch (type) {
    case 'info':
    case 'success':
    case 'warning':
    case 'danger':
      return type
    default:
      return undefined
  }
}

function renderValue({ valueNow, valueMax }) {
  return (
    <Text>
      {Math.round(valueNow / valueMax * 100)}%
    </Text>
  )
}