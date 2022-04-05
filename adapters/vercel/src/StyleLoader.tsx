import * as React from 'react'

import { GeistProvider, CssBaseline } from '@geist-ui/core'

import 'inter-ui/inter.css'

export function StyleLoader({ theme, children }) {
  return (
    <GeistProvider>
      <CssBaseline />
      {children}
    </GeistProvider>
  )
}