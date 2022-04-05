import * as React from 'react'

import { DescriptionListProps } from '@quick-change/core'

import { EuiDescriptionList } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/display/description-list
 */
export function DescriptionListAdapter({ children }: DescriptionListProps) {
  return (
    <EuiDescriptionList>
      {children}
    </EuiDescriptionList>
  )
}
