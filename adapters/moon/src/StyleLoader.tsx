import * as React from 'react'
import { ThemeProvider, moonDesignLight } from '@heathmont/moon-themes'

export function StyleLoader({ theme, children }) {
  return (
    <ThemeProvider theme={moonDesignLight}>
      {children}
    </ThemeProvider>
  )
}