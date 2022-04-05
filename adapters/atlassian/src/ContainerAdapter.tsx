import * as React from 'react'

import { ContainerProps } from '@quick-change/core'

import Page from '@atlaskit/page'
import { PageLayout, Content, LeftPanel, RightPanel, Main } from '@atlaskit/page-layout'

/**
 * @see https://atlaskit.atlassian.com/packages/design-system/page
 * @see https://atlaskit.atlassian.com/packages/design-system/page-layout
 */
export function ContainerAdapter({ breakpoint, align, children }: ContainerProps) {
  return (
    <PageLayout>
      <Content>
        <Main>{children}</Main>
      </Content>
    </PageLayout>
  )
}