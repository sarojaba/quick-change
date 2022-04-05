import * as React from 'react'

import { PaginationProps } from '../interfaces'

/**
 * @see https://component.gallery/components/pagination/#description
 */
export function PaginationAdapter({ current, total, onChange }: PaginationProps) {
  const pages = Array.from({ length: total }, (v, i) => i + 1)

  return (
    <nav aria-label="Pagination">
      <ul>
        {pages.map(p => <li>{render(p, current)}</li>)}
      </ul>
    </nav>
  )
}

function render(page, current) {
  return page === current
    ? page
    : <a href="#">{page}</a>
}