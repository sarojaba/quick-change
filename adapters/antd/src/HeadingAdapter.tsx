import * as React from 'react'

import { HeadingProps } from '@quick-change/core'

import { Typography } from 'antd'

export function HeadingAdapter({ level, align, children }: HeadingProps) {
  const { Title } = Typography

  switch (level) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return <Title level={level}>{children}</Title>
    case 6:
      return <Title level={5}>{children}</Title>
    default:
      // return `Not supported size: ${level}`
      throw Error(`Not supported level: ${level}`)
  }
}