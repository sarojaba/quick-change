import * as React from 'react'

import { CardProps } from '@quick-change/core'

import { Card } from 'baseui/card'

/**
 * @see https://baseweb.design/components/card
 */
export function CardAdapter({ image, children }: CardProps) {
  const cardBodyElements = React.Children.toArray(children).filter(child => child.type.name === 'CardBody')

  const title = cardBodyElements.length >= 1
    ? cardBodyElements[0].props.title
    : undefined

  return (
    <Card
      headerImage={image}
      title={title}
    >
      {children}
    </Card>
  )
}