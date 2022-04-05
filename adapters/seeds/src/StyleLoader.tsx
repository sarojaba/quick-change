import * as React from 'react'

import { ThemeProvider } from '@sproutsocial/racine'

export function StyleLoader({ theme, children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}