import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

import { EuiFlexItem } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/layout/flex
 */
export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <EuiFlexItem grow={span}>
      {children}
    </EuiFlexItem>
  )
}
