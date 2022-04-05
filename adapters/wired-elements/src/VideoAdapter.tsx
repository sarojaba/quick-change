import React, { Children } from 'react'

import { VideoProps } from '@quick-change/core'

import { WiredVideo } from 'react-wired-elements'

export function VideoAdapter({ autoPlay, controls, children }: VideoProps) {

  const src = Children.toArray(children)[0].props.src

  return <WiredVideo src={src} autoPlay={autoPlay}>{children}</WiredVideo>
}