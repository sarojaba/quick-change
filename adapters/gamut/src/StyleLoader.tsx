import * as React from 'react'

import { GamutProvider } from '@codecademy/gamut-styles'

export function StyleLoader({ theme, children }) {
  return (
    <GamutProvider>
      {children}
    </GamutProvider>
  )
}