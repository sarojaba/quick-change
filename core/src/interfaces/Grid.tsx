import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  responsive: PropTypes.bool,
  gapless: PropTypes.bool,
  children: PropTypes.node
}

const defaultProps = {
  responsive: false,
  gapless: false,
  children: undefined
}

export type GridProps = PropsType<typeof propTypes, typeof defaultProps>

export function Grid({ responsive, gapless, children }: GridProps) {
  const { GridAdapter } = useComponents()
  return (
    <GridAdapter responsive={ responsive } gapless={ gapless }>
      { children }
    </GridAdapter>
  )
}

Grid.propTypes = propTypes
Grid.defaultProps = defaultProps

/**
 * Sub components
 */

import { GridItem } from './GridItem'

Grid.Item = GridItem