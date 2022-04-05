import * as React from 'react'

import { CodeProps } from '@quick-change/core'

import { EuiCode } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/editors-syntax/code
 */
export function CodeAdapter({ children }: CodeProps) {
  return (
    <EuiCode>
      {children}
    </EuiCode>
  )
}