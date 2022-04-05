import * as React from 'react'

import { CardBodyProps } from '@quick-change/core'

import { CardHeader, CardContent, Body2 } from 'ui-neumorphism'

export function CardBodyAdapter({ title, thumbnail, children }: CardBodyProps) {
  return <>
    <CardHeader title={title} />
    <CardContent>
      <Body2>{children}</Body2>
    </CardContent>
  </>
}