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

export type TableRowProps = PropsType<typeof propTypes, typeof defaultProps>

export function TableRow({ children }: TableRowProps) {
  const { TableRowAdapter } = useComponents()
  return (
    <TableRowAdapter>
      {children}
    </TableRowAdapter>
  )
}

TableRow.propTypes = propTypes
TableRow.defaultProps = defaultProps
