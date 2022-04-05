import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  onChange: PropTypes.func
}

const defaultProps = {
  current: 1,
  total: 5,
  onChange: undefined
}

export type PaginationProps = PropsType<typeof propTypes, typeof defaultProps>

export function Pagination({ current, total, onChange }: PaginationProps) {
  const { PaginationAdapter } = useComponents()
  return (
    <PaginationAdapter
      current={current}
      total={total}
      onChange={onChange}
    />
  )
}

Pagination.propTypes = propTypes
Pagination.defaultProps = defaultProps
