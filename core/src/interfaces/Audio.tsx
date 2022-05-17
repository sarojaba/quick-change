import * as React from 'react'

import { useComponents } from '../providers'

export interface AudioProps {
  autoPlay: boolean,
  controls: boolean,
  children: any
}

export function Audio(props: AudioProps) {
  const { AudioAdapter } = useComponents()
  return <AudioAdapter {...props} />
}
