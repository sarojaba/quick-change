import * as React from 'react'

import { Video } from 'grommet'

import { VideoProps } from '@quick-change/core'

export function VideoAdapter({ autoPlay, controls, children }: VideoProps) {
  return (
    <Video autoPlay={autoPlay}>
      {children}
    </Video>
  )
}