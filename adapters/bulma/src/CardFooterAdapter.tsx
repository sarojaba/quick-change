import * as React from 'react'

import { CardFooterProps } from '@quick-change/core'

import { Card } from 'rbx'

export function CardFooterAdapter({ children }: CardFooterProps) {
  return (
    <Card.Footer>{
      React.Children.map(children, child => {
        return <Card.Footer.Item>{child}</Card.Footer.Item>
      })
    }</Card.Footer>
  )
}