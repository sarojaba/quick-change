import * as React from 'react'

export function TableAdapter({ striped, hover, bordered, small, responsive, children }) {
  
  const classNameByStriped = striped ? '' : 'unstriped'
  const classNameByHover = hover ? 'hover' : ''
  const classNameByBordered = bordered ? 'table-bordered' : ''
  const classNameBySmall = small ? 'table-sm' : ''
  const classNameByResponsive = responsive ? 'table-scroll' : ''

  return (
    <table className={`${classNameByStriped} ${classNameByHover} ${classNameByBordered} ${classNameBySmall} ${classNameByResponsive}`}>
      { children }
    </table>
  )
}
