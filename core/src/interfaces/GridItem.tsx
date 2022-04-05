import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  span: PropTypes.number,
  offset: PropTypes.number,
  children: PropTypes.node
}

const defaultProps = {
  span: undefined,
  offset: undefined,
  chilren: undefined
}

export type GridItemProps = PropsType<typeof propTypes, typeof defaultProps>

export function GridItem({ span, offset, children }: GridItemProps) {
  const { GridItemAdapter } = useComponents()
  return (
    <GridItemAdapter span={span} offset={offset}>{children}</GridItemAdapter>
  )
}

GridItem.propTypes = propTypes
GridItem.defaultProps = defaultProps
