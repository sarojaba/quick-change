import * as React from 'react'

import { VideoProps } from '@quick-change/core'

export function VideoAdapter({ autoPlay, controls, children }: VideoProps) {
  return (
    <div className="embed-responsive">
      <video autoPlay={autoPlay} controls={controls}>{children}</video>
    </div>
  )
}