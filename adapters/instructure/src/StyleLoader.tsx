import * as React from 'react'

import { InstUISettingsProvider, canvas } from '@instructure/ui'

/**
 * @see https://instructure.design/#usage
 */
export function StyleLoader({ theme, children }) {
  return (
    <InstUISettingsProvider theme={canvas}>
      {children}
    </InstUISettingsProvider>
  )
}