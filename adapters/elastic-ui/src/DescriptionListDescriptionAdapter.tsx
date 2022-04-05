import * as React from 'react'

import { DescriptionListDescriptionProps } from '@quick-change/core'

import { EuiDescriptionListDescription } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/display/description-list
 */
export function DescriptionListDescriptionAdapter({ children }: DescriptionListDescriptionProps) {
  return (
    <EuiDescriptionListDescription>
      {children}
    </EuiDescriptionListDescription>
  )
}
