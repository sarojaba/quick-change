import * as React from 'react'

import { HeadingProps } from '@quick-change/core'

import { Heading } from '@primer/react'

export function HeadingAdapter({ level, align, children }: HeadingProps) {
  return (
    <Heading as={`h${level}`}>{children}</Heading>
  )
}