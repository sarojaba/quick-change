import * as React from 'react'

import { ContainerProps } from '@quick-change/core'

import { Layout } from 'antd'
const { Sider, Content } = Layout

export function ContainerAdapter({ breakpoint, align, children }: ContainerProps) {
  return (
    <Layout>
      <Sider />
      <Content>{children}</Content>
      <Sider />
    </Layout>
  )
}