import * as React from 'react'

import { LinkProps } from '@quick-change/core'

import { Link } from '@shopify/polaris'

/**
 * @see https://github.com/Shopify/polaris-react/tree/main/src/components/Link
 */
export function LinkAdapter({ href, external, children }: LinkProps) {
  return (
    <Link url={href}>
      {children}
    </Link>
  )
}