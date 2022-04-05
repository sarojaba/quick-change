import * as React from 'react'

export function DropdownAdapter({ title, children }) {
  return (
    <ul className="dropdown menu" data-dropdown-menu>
      <li>
        <a>{ title }</a>
        <ul className="menu">{ children }</ul>
      </li>
    </ul>
  )
}

export function DropdownItemAdapter({ href, children }) {
  return (
    <li>
      <a href={ href }>{ children }</a>
    </li>
  )
}