import * as React from 'react'

import { Class101UIProvider } from '@class101/ui'

export function StyleLoader({ theme, children }) {
  return (
    <Class101UIProvider>
      {children}
    </Class101UIProvider> 
  )
}