import * as React from 'react'

import { useComponents } from '../providers'

export interface VideoProps {
  autoPlay: boolean,
  controls: boolean,
  children: any
}

export function Video({ autoPlay, controls, children }: VideoProps) {
  const { VideoAdapter } = useComponents()
  return (
    <VideoAdapter autoPlay={autoPlay} controls={controls}>{children}</VideoAdapter>
  )
}
