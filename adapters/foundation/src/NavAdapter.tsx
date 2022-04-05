import React, { Children, cloneElement } from 'react'

export function NavAdapter({ brand, href, children }) {
  return <>
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu>
          <li className="menu-text">{ brand }</li>
          { children }
        </ul>
      </div>
    </div>
  </>
}
