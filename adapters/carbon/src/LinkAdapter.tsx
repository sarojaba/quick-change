import * as React from 'react'

import { LinkProps } from '@quick-change/core'

import { Link } from 'carbon-components-react'

export function LinkAdapter({ href, external, children }: LinkProps) {
  return <Link href={href}>{children}</Link>
}