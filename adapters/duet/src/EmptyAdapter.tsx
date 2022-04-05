import * as React from 'react'

import { EmptyProps } from '@quick-change/core'

import { DuetEmpty as Empty } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/empty-state/
 */
export function EmptyAdapter({ children }: EmptyProps) {
  return (
    <Empty>{children}</Empty>
  )
}