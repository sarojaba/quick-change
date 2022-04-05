import * as React from 'react'

import { CardBodyProps } from '@quick-change/core'

import { Card } from 'react-bootstrap'

export function CardBodyAdapter({ title, thumbnail, children }: CardBodyProps) {
  return <>
    <Card.Title>{title}</Card.Title>
    <Card.Text>{children}</Card.Text>
  </>
}