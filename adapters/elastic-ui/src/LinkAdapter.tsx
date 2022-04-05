import * as React from 'react'

import { LinkProps } from '@quick-change/core'

import { EuiLink } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/navigation/link
 */
export function LinkAdapter({ href, external, children }: LinkProps) {
  return (
    <EuiLink href={href}>
      {children}
    </EuiLink>
  )
}