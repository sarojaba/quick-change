import * as React from 'react'

import { TabProps, TabGroupProps } from '@quick-change/core'

export function TabAdapter({ id, title, href, active, disabled, children }: TabProps) {
  return href
    ? <a href={ href } style={{textDecoration:'none'}}>
        <button role="tab" aria-selected={active} aria-controls={children}>{children}</button>
      </a>
    : <button role="tab" aria-selected={active} aria-controls={children}>{children}</button>
}

export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  return (
    <section className="tabs" style={{ maxWidth: '500px' }}>
      <menu role="tablist">{children}</menu>
    </section>
  )
}