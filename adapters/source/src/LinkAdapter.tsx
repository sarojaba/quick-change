import * as React from 'react'

import { LinkProps } from '@quick-change/core'

import { Link } from '@guardian/source-react-components'

export function LinkAdapter({ href, external, children }: LinkProps) {
  return (
    <Link href={href}>
      {children}
    </Link>
  )
}