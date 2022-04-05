import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

import { Layout } from '@workday/canvas-kit-react'

/**
 * @see https://workday.github.io/canvas-kit/?path=/docs/components-containers-layout-react--12-column-layout
 */
export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <Layout.Column columns={span}>
      {children}
    </Layout.Column>
  )
}
