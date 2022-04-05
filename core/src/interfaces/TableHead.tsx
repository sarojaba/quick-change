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

export type TableHeadProps = PropsType<typeof propTypes, typeof defaultProps>

export function TableHead({ children }: TableHeadProps) {
  const { TableHeadAdapter } = useComponents()
  return (
    <TableHeadAdapter>
      {children}
    </TableHeadAdapter>
  )
}

TableHead.propTypes = propTypes
TableHead.defaultProps = defaultProps
