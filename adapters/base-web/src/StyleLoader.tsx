import * as React from 'react'

import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'

const engine = new Styletron()

/**
 * @see https://baseweb.design/getting-started/setup#adding-base-web-to-your-application
 * @param {*} param0 
 * @returns 
 */
export function StyleLoader({ children }: any) {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        {children}
      </BaseProvider>
    </StyletronProvider>
  )
}
