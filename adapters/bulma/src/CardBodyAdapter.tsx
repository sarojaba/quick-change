import * as React from 'react'

import { CardBodyProps } from '@quick-change/core'

import { Card, Media, Image, Heading, Content } from 'rbx'

export function CardBodyAdapter({ title, thumbnail, children }: CardBodyProps) {
  return <>
    <Card.Header>
      <Card.Header.Title>
        <Media>
          {
            thumbnail
              ? <Media.Item align="left">
                  <Image size={64} src={thumbnail} />
                </Media.Item>
              : null
          }
          <Media.Item>
            <Heading size={4}>{title}</Heading>
          </Media.Item>
        </Media>
      </Card.Header.Title>
    </Card.Header>
    <Card.Content>
      <Content>{children}</Content>
    </Card.Content>
  </>
}