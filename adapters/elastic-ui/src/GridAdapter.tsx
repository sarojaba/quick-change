import * as React from 'react'

import { GridProps } from '@quick-change/core'

import { EuiFlexGroup } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/layout/flex
 */
export function GridAdapter({ responsive, gapless, children }: GridProps) {
  return (
    <EuiFlexGroup>{children}</EuiFlexGroup>
  )
}
