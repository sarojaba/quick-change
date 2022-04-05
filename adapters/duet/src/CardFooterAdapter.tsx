import * as React from 'react'

import { CardFooterProps } from '@quick-change/core'

import { DuetSpacer as Spacer } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/card/
 */
export function CardFooterAdapter({ children }: CardFooterProps) {
  return <>
    <Spacer />
    {children}
  </>
}