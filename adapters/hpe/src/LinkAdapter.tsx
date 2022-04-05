import * as React from 'react'

import { LinkProps } from '@quick-change/core'

import { Anchor } from 'grommet'

export function LinkAdapter({ href, external, children }: LinkProps) {
  return (
    <Anchor href={href} label={children} />
  )
}