import * as React from 'react'

import { LinkProps } from '@quick-change/core'

export { Link } from '@trussworks/react-uswds'

export function LinkAdapter({ href, external, children }: LinkProps) {
  return (
    <Link href={href}>{children}</Link>
  )
}