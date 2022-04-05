import * as React from 'react'

import { GridProps } from '@quick-change/core'

import { Layout } from '@shopify/polaris'

/**
 * @see https://github.com/Shopify/polaris-react/tree/main/src/components/Layout
 */
export function GridAdapter({ responsive, gapless, children }: GridProps) {
  return (
    <Layout>{children}</Layout>
  )
}
