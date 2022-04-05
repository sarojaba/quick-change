import * as React from 'react'

import { defaultTheme, Provider } from '@adobe/react-spectrum'

export function StyleLoader({ theme, children }) {
  return (
    <Provider theme={defaultTheme}>
      {children}
    </Provider>
  )
}