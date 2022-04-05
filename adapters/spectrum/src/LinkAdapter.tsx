import * as React from 'react'

import { LinkProps } from '@quick-change/core'

import { Link } from '@adobe/react-spectrum'

export function LinkAdapter({ href, external, children }: LinkProps) {
  return (
    <Link>
      <a href={href}>{children}</a>
    </Link>
  )
}