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

export type TableHeadCellProps = PropsType<typeof propTypes, typeof defaultProps>

export function TableHeadCell({ children }: TableHeadCellProps) {
  const { TableHeadCellAdapter } = useComponents()
  return (
    <TableHeadCellAdapter>
      {children}
    </TableHeadCellAdapter>
  )
}

TableHeadCell.propTypes = propTypes
TableHeadCell.defaultProps = defaultProps
