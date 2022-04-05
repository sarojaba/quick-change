import * as React from 'react'

import { LinkProps } from '@quick-change/core'

import { Link } from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/link
 */
export function LinkAdapter({ href, external, children }: LinkProps) {
  return (
    <Link href={href}>{children}</Link>
  )
}