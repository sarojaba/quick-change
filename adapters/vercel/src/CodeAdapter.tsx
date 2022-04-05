import * as React from 'react'

import { CodeProps } from '@quick-change/core'

import { Code } from '@geist-ui/core'

export function CodeAdapter({ children }: CodeProps) {
  return <Code>{children}</Code>
}