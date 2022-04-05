import * as React from 'react'

import { NavProps } from '@quick-change/core'

export function NavAdapter({ children }: NavProps) {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">{children}</ul>
      </div>
    </div>
  )
}
