import * as React from 'react'

import { HeadingProps } from '@quick-change/core'

import { Title } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/typography/title
 */
export function HeadingAdapter({ level, align, children }: HeadingProps) {
  return (
    <Title level={level.toString()}>
      {children}
    </Title>
  )
}