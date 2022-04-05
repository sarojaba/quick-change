import * as React from 'react'

import {ThemeProvider} from '@primer/react'

/**
 * @see https://primer.style/react/getting-started#themeprovider
 * @param {*} param0 
 * @returns 
 */
export function StyleLoader({ theme, children }) {
  return (
    <ThemeProvider>{children}</ThemeProvider>
  )
}