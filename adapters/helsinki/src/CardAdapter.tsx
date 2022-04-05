import * as React from 'react'

import { CardProps } from '@quick-change/core'

import { Card } from 'hds-react'

/**
 * @see 
 */
export function CardAdapter({ image, children }: CardProps) {
  const cardBodyElements = React.Children.toArray(children).filter(child => child.type.name === 'CardBody')

  const title = cardBodyElements.length >= 1
    ? cardBodyElements[0].props.title
    : undefined

  const text = cardBodyElements.length >= 1
    ? cardBodyElements[0].props.children
    : undefined

  const cardFooterElements = React.Children.toArray(children).filter(child => child.type.name === 'CardFooter')

  const actions = cardFooterElements.length >= 1
    ? cardFooterElements[0].props.children
    : undefined

  return (
    <Card heading={title} text={text}>
      {actions}
    </Card>
  )
}