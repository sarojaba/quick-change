import * as React from 'react'

import { GlobalStyles } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/getting-started
 */
export function StyleLoader({ theme, children }) {
  return <>
    <GlobalStyles />
    {children}
  </>
}