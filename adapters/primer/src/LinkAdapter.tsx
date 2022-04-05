import * as React from 'react'

import { LinkProps } from '@quick-change/core'

import { Link } from '@primer/react'

/**
 * @see https://primer.style/react/Link
 */
export function LinkAdapter({ href, external, children }: LinkProps) {
  return <Link href={href}>{children}</Link>
}