import * as React from 'react'

import { TabProps } from '@quick-change/core'

import { EuiTab } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/navigation/tabs
 */
export function TabAdapter({ id, title, href, active, disabled, children }: TabProps) {
  return (
    <EuiTab
      href={href}
      isSelected={active}
      disabled={disabled}
    >
      {title}
    </EuiTab>
  )
}
