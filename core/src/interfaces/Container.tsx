import * as React from 'react'

import { useComponents } from '../providers'

export interface ContainerProps {
  breakpoint: string,
  align: any,
  children: any
}

export function Container({ breakpoint, align, children }: ContainerProps) {
  const { ContainerAdapter } = useComponents()

  return (
    <ContainerAdapter breakpoint={ breakpoint } align={ align }>
      { children }
    </ContainerAdapter>
  )
}
