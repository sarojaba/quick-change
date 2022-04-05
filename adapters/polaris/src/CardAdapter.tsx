import * as React from 'react'

import { CardProps } from '@quick-change/core'

import { Card } from '@shopify/polaris'

/**
 * @see https://storybook.polaris.shopify.com/?path=/docs/all-components-card--default-card
 */
export function CardAdapter({ image, children }: CardProps) {

  const cardBodyElements = React.Children.toArray(children).filter(child => child.type.name === 'CardBody')

  const title = cardBodyElements.length >= 1
    ? cardBodyElements[0].props.title
    : undefined
    
  return (
    <Card title={title}>
      {children}
    </Card>
  )
}