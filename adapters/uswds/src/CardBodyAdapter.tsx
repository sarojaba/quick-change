import * as React from 'react'

import { CardBodyProps } from '@quick-change/core'

import { CardHeader, CardBody } from '@trussworks/react-uswds'

export function CardBodyAdapter({ title, thumbnail, children }: CardBodyProps) {
  return <>
    <CardHeader>
      <h3>{title}</h3>
    </CardHeader>
    <CardBody>
      <p>{children}</p>
    </CardBody>
  </>
}