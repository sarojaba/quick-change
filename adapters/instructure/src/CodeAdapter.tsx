import * as React from 'react'

import { CodeProps } from '@quick-change/core'

import { CodeEditor } from '@instructure/ui'

/**
 * @see https://instructure.design/#CodeEditor
 */
export function CodeAdapter({ children }: CodeProps) {
  return (
    <CodeEditor
      label={undefined}
      value={children}
    />
  )
}