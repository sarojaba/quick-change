import * as React from 'react'

import { GridProps } from '@quick-change/core'

import { Layout } from '@workday/canvas-kit-react'

/**
 * @see https://workday.github.io/canvas-kit/?path=/docs/components-containers-layout-react--12-column-layout
 */
export function GridAdapter({ responsive, gapless, children }: GridProps) {
  return (
    <Layout spacing={10}>
      {children}
    </Layout>
  )
}
