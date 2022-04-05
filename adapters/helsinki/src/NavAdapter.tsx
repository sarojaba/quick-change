import * as React from 'react'

import { NavProps } from '@quick-change/core'

import { Navigation } from 'hds-react'

export function NavAdapter({ children }: NavProps) {
  return (
    <Navigation menuToggleAriaLabel="Menu" skipTo="#content" skipToContentLabel="Skip to main content">
      <Navigation.Row>
        {children}
      </Navigation.Row>
    </Navigation>
  )
}