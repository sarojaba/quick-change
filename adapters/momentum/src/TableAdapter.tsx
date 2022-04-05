import * as React from 'react'

import { TableProps } from '@quick-change/core'

/**
 * @see https://momentum.design/components/data-table
 */
export function TableAdapter({ striped, hover, bordered, small, responsive, children }: TableProps) {
  return (
    <div className="md-data-table">
      <div className="md-data-table__wrapper">
        <table>
          {children}
        </table>
      </div>
    </div>
  )
}