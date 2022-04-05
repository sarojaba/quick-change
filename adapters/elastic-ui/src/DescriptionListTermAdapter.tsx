import * as React from 'react'

import { DescriptionListTermProps } from '@quick-change/core'

import { EuiDescriptionListTitle } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/display/description-list
 */
export function DescriptionListTermAdapter({ children }: DescriptionListTermProps) {
  return (
    <EuiDescriptionListTitle>
      {children}
    </EuiDescriptionListTitle>
  )
}