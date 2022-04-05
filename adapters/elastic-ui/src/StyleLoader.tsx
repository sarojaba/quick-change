import * as React from 'react'

import '@elastic/eui/dist/eui_theme_light.css'

import { EuiProvider } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/guidelines/getting-started
 */
export function StyleLoader({ theme, children }) {
  return (
    <EuiProvider colorMode="light">
      {children}
    </EuiProvider>
  )
}