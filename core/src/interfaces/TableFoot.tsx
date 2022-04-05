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

export type TableFootProps = PropsType<typeof propTypes, typeof defaultProps>

export function TableFoot({ children }: TableFootProps) {
  const { TableFootAdapter } = useComponents()
  return (
    <TableFootAdapter>
      {children}
    </TableFootAdapter>
  )
}

TableFoot.propTypes = propTypes
TableFoot.defaultProps = defaultProps
