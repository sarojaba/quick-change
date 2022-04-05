import * as React from 'react'

import { CardBodyProps } from '@quick-change/core'

export function CardBodyAdapter({ title, thumbnail, children }: CardBodyProps) {
  return <>
    <h2 className="fs-body3 lh-sm fc-dark">{title}</h2>
    <p className="fs-body1 fc-medium">{children}</p>
  </>
}