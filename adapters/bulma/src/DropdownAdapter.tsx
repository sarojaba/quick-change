import * as React from 'react'

export function DropdownAdapter({ title, children }) {
  // const isActive = active ? 'is-active' : ''
  // return (
  //   <div className={`dropdown ${isActive}`}>
  //     <div className="dropdown-trigger">
  //       <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
  //         <span>{ title }</span>
  //         <span className="icon is-small">
  //           <i className="fas fa-angle-down" aria-hidden="true"></i>
  //         </span>
  //       </button>
  //     </div>
  //     <div className="dropdown-menu" id="dropdown-menu" role="menu">
  //       <div className="dropdown-content">{ children }</div>
  //     </div>
  //   </div>
  // )
  return null
}

export function DropdownItemAdapter({ href, children }) {
  return (
    <a className="dropdown-item" href={ href }>{ children }</a>
  )
}