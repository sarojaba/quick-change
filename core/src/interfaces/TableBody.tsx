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

export type TableBodyProps = PropsType<typeof propTypes, typeof defaultProps>

export function TableBody({ children }: TableBodyProps) {
  const { TableBodyAdapter } = useComponents()
  return (
    <TableBodyAdapter>
      {children}
    </TableBodyAdapter>
  )
}

TableBody.propTypes = propTypes
TableBody.defaultProps = defaultProps
