import * as React from 'react'

import { useComponents } from '../providers'

export interface GridProps {
  responsive?: boolean,
  gapless?: boolean,
  children?: any
}

export function Grid({ responsive, gapless, children }: GridProps) {
  const { GridAdapter } = useComponents()
  return (
    <GridAdapter responsive={ responsive } gapless={ gapless }>
      { children }
    </GridAdapter>
  )
}

/**
 * Sub components
 */

import { GridItem } from './GridItem'

Grid.Item = GridItem