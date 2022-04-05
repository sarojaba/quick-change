import * as React from 'react'

import { GridProps } from '@quick-change/core'

import { Columns } from '@guardian/source-react-components'

export function GridAdapter({ responsive, gapless, children }: GridProps) {
  return (
    <Columns>{children}</Columns>
  )
}
