import * as React from 'react'

import {
  IconsProvider,
  ThemeProvider
} from '@talend/design-system'

/**
 * @see https://design.talend.com/?path=/docs/getting-started--page
 */
export function StyleLoader({ theme, children }) {
  return (
    <ThemeProvider theme="light">
      <ThemeProvider.GlobalStyle />
      <IconsProvider
        bundles={["https://unpkg.com/@talend/icons/dist/svg-bundle/all.svg"]}
      />
      {children}
    </ThemeProvider>
  )
}