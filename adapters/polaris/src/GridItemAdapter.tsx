import * as React from 'react'

import { GridItemProps } from '@quick-change/core'

import { Layout } from '@shopify/polaris'

/**
 * @see https://github.com/Shopify/polaris-react/tree/main/src/components/Layout
 */
export function GridItemAdapter({ span, offset, children }: GridItemProps) {
  return (
    <Layout.Section>{children}</Layout.Section>
  )
}
