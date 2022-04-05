import * as React from 'react'

import { VideoProps } from '../interfaces'

/**
 * @see 
 */
export function VideoAdapter({ autoPlay, controls, children }: VideoProps) {
  return (
    <video autoPlay={autoPlay} controls={controls}>
      {children}
    </video>
  )
}