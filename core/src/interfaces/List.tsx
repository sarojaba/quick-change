import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  as: PropTypes.oneOf(['ordered', 'unordered']),
  children: PropTypes.node
}

const defaultProps = {
  as: 'unordered',
  children: undefined
}

export type ListProps = PropsType<typeof propTypes, typeof defaultProps>

export function List({ as, children }: ListProps) {
  const { ListAdapter } = useComponents()
  return (
    <ListAdapter as={as}>
      {children}
    </ListAdapter>
  )
}

List.propTypes = propTypes
List.defaultProps = defaultProps

/**
 * Sub components
 */
import { ListItem } from './ListItem'

List.Item = ListItem
