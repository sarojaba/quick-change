import * as React from 'react'

import { Grommet } from 'grommet'
import { hpe } from 'grommet-theme-hpe'

export function StyleLoader({ theme, children }) {
  return (
    <Grommet theme={hpe}>
      {children}
    </Grommet>
  )
}