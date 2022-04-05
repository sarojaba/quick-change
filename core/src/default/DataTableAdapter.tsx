import * as React from 'react'

import { DataTableProps } from '../interfaces'

/**
 * @see 
 */
export function DataTableAdapter({ data, columns }: DataTableProps) {
  return (
    <table>
      <thead>
        <tr>
          {
            columns.map(c => {
              return <th>{c['title']}</th>
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map(d => {
            return <tr>
              {
                columns.map(c => <td>{d[c['key']]}</td>)
              }
            </tr>
          })
        }
      </tbody>
    </table>
  )
}