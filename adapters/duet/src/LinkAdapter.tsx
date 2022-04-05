import * as React from 'react'

import { LinkProps } from '@quick-change/core'

import { DuetLink as Link } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/link/
 */
export function LinkAdapter({ href, external, children }: LinkProps) {
  return (
    <Link
      url={href}
      external={external}
    >
      {children}
    </Link>
  )
}