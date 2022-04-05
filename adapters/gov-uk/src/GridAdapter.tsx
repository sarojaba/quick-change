import * as React from 'react'

import { GridProps } from '@quick-change/core'

import { GridRow } from 'govuk-react'

export function GridAdapter({ responsive, gapless, children }: GridProps) {
  return <GridRow>{children}</GridRow>
}
