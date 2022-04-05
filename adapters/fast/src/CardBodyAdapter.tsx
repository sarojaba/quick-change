import * as React from 'react'

import { CardBodyProps } from '@quick-change/core'

export function CardBodyAdapter({ title, thumbnail, children }: CardBodyProps) {
  return <>
    <h2>{title}</h2>
    <p>{children}</p>
  </>
}