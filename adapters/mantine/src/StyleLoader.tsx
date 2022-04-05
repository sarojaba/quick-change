import * as React from 'react'

import { MantineProvider } from '@mantine/core'

export function StyleLoader({ theme, children }) {
  return (
    <MantineProvider>
      {children}
    </MantineProvider>
  )
}