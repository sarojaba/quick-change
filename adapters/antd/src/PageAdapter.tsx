import * as React from 'react'

import { PageProps } from '@quick-change/core'

import { Layout } from 'antd'

/**
 * @see https://ant.design/components/layout/
 */
export function PageAdapter({ children }: PageProps) {
  return <Layout>{children}</Layout>
}