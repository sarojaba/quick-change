import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  children: PropTypes.node
}

const defaultProps = {
  children: undefined
}

export type ListItemProps = PropsType<typeof propTypes, typeof defaultProps>

export function ListItem({ children }: ListItemProps) {
  const { ListItemAdapter } = useComponents()
  return <ListItemAdapter>{children}</ListItemAdapter>
}

ListItem.propTypes = propTypes
ListItem.defaultProps = defaultProps