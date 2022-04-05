import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

import { Progress } from 'antd'

export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return (
    <Progress status={classNameByType(type)} percent={value} />
  )
}

function classNameByType(type) {
  switch (type) {
    case 'danger':
      return 'exception'
    default:
      return type
  }
}