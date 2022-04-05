import * as React from 'react'

import { CardProps } from '@quick-change/core'

import { Card, Avatar } from 'antd'

/**
 * @see https://ant.design/components/card/
 * 
 */
export function CardAdapter({ image, children }: CardProps) {

  const cardFooterElements = React.Children.toArray(children).filter(child => child.type['name'] === 'CardFooter')

  const actions = cardFooterElements.length >= 1
    ? [cardFooterElements[0].props.children]
    : undefined

  return (
    <Card
      cover={<img src={image} />}
      actions={actions}
    >
      {children}
    </Card>
  )
}