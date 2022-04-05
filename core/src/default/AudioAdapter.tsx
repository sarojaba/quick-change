import * as React from 'react'

import { AudioProps } from '../interfaces'

/**
 * @see 
 */
export function AudioAdapter({ autoPlay, controls, children }: AudioProps) {
  return (
    <audio autoPlay={autoPlay} controls={controls}>
      {children}
    </audio>
  )
}