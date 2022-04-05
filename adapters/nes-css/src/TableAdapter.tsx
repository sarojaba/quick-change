import * as React from 'react'

export function TableAdapter({ striped, hover, bordered, small, responsive, children }) {
  const table = <>
    <table className={tableClassName(bordered)}>
      {children}
    </table>
  </>

  return responsive
    ? <div className="nes-table-responsive">{ table }</div>
    : table
}

function tableClassName(bordered) {
  const isBordered = bordered ? 'is-bordered' : ''

  return `nes-table ${isBordered}`
}
