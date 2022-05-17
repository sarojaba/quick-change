import * as React from 'react'

import { useComponents } from '../providers'

export interface LinkProps {
  href: string,
  external: boolean,
  children: any
}

export function Link({ href, external, children }: LinkProps) {
  const { LinkAdapter } = useComponents()
  return (
    <LinkAdapter
      href={href}
      external={external}
    >
      {children}
    </LinkAdapter>
  )
}
