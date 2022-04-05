import * as React from 'react'

import { CardBodyProps } from '@quick-change/core'

import { Card, Avatar } from 'antd'

/**
 * @see https://ant.design/components/card/
 */
export function CardBodyAdapter({ title, thumbnail, children }: CardBodyProps) {
  return (
    <Card.Meta
      title={title}
      avatar={thumbnail ? <Avatar src={thumbnail}/> : undefined}
      description={children}
    />
  )
}