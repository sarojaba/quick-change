import * as React from 'react'

import { CardProps } from '@quick-change/core'

import styled from 'styled-components'

export function CardAdapter({ image, children }: CardProps) {
  const Content = styled.div`
    word-break: break-word;
    white-space: normal;
  `

  const cardBodyElements = React.Children.toArray(children).filter(child => child.type.name === 'CardBody')

  const title = cardBodyElements.length >= 1
    ? cardBodyElements[0].props.title
    : undefined

  const bodyContent = cardBodyElements.length >= 1
    ? cardBodyElements[0].props.children
    : undefined

  const cardFooterElements = React.Children.toArray(children).filter(child => child.type.name === 'CardFooter')

  const footerContent = cardFooterElements.length >= 1
    ? cardFooterElements[0].props.children
    : undefined

  return (
    <div className="card">
      <img src={image} />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <Content className="card-text">{bodyContent}</Content>
        {footerContent}
      </div>
    </div>
  )
}