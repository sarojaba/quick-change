import * as React from 'react'

import { HeadingProps } from '@quick-change/core'

import { Heading, Subheading, SectionHeading } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/heading
 * @see https://f36.contentful.com/components/subheading
 */
export function HeadingAdapter({ level, align, children }: HeadingProps) {
  switch (level) {
    case 1:
      return <Heading>{children}</Heading>
    case 2:
      return <SectionHeading>{children}</SectionHeading>
    case 3:
      return <Subheading>{children}</Subheading>
    case 4:
    case 5:
    case 6:
      console.warn(`Not supported size: ${level}`)
      return null
    default:
      return `Not supported size: ${level}`
      // throw Error(`Not supported size: ${size}`)
  }
}