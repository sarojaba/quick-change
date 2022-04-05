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

export type TableDataCellProps = PropsType<typeof propTypes, typeof defaultProps>

export function TableDataCell({ children }: TableDataCellProps) {
  const { TableDataCellAdapter } = useComponents()
  return (
    <TableDataCellAdapter>
      {children}
    </TableDataCellAdapter>
  )
}

TableDataCell.propTypes = propTypes
TableDataCell.defaultProps = defaultProps
