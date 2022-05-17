import * as React from 'react'

import { useComponents } from '../providers'

export interface HeadingProps {
  level?: number,
  align?: string,
  children?: string
}

export function Heading({ level, align, children }: HeadingProps) {
  const { HeadingAdapter } = useComponents()

  return (
    <HeadingAdapter level={ level } align={ align }>{ children }</HeadingAdapter>
  )
}
