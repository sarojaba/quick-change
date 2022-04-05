import * as React from 'react'

import { TabProps } from '@quick-change/core'

export function TabAdapter({ id, title, href, active, disabled, children }: TabProps) {
  const classNameByActive = active ? 'is-active': ''

  return (
    <li className={`tabs-title ${classNameByActive}`}>{
      active
        ? <a href={ href } aria-selected="true">{ children }</a>        
        : <a href={ href }>{ children }</a>
    }</li>
  )
}
