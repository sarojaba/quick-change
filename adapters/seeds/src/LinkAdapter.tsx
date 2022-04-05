import * as React from 'react'

import { LinkProps } from '@quick-change/core'

import { Link } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/link
 */
export function LinkAdapter({ href, external, children }: LinkProps) {
  return (
    <Link href={href}>
      {children}
    </Link>
  )
}