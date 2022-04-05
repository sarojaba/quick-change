import React, { Children, cloneElement } from 'react'

import { NavItemProps } from '@quick-change/core'

export function NavItemAdapter({ href, label, icon, disabled, children }: NavItemProps) {

  if (!children) {
    return <li>
      <a href={ href }>{ label }</a>
    </li>
  }

  return <li>
    <a href={href}>{label}</a>
    <ul className="menu vertical" data-submenu>{
      Children.map(children, child => {
        return cloneElement(child, { type: 'nav' })
      })
    }</ul>
  </li>
}