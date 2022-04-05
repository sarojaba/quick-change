import * as React from 'react'

import { ContainerProps } from '@quick-change/core'

import { DuetLayout as Layout } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/layout/
 */
export function ContainerAdapter({ breakpoint, align, children }: ContainerProps) {
  return (
    <Layout>
      <div slot="main">{children}</div>
    </Layout>
  )
}