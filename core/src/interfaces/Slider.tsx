import * as React from 'react'

import { useComponents } from '../providers'

export interface SliderProps {
  min?: number,
  max?: number,
  value: number,
  disabled: boolean,
  onChange?: any
}

export function Slider(props: SliderProps) {
  const { SliderAdapter } = useComponents()
  return <SliderAdapter {...props} />
}
