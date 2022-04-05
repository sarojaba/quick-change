import * as React from 'react'

export function TableColumn({ attr, head, row, cell, children }) {
  if (attr) {
    if (children) {
      return <td>{children(cell)}</td>
    } else {
      return <td>{cell}</td>
    }    
  } else {
    return <td>{children[1].props.children(row)}</td>
  }
}