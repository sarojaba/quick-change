import * as React from 'react'

import { BreadcrumbProps } from '@quick-change/core'

import { EuiBreadcrumbs } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/navigation/breadcrumbs
 */
export function BreadcrumbAdapter({ children }: BreadcrumbProps) {
  const breadcrumbs = React.Children.map(children, child => {
    return {
      text: child.props.children,
      href: child.props.href
    }
  })

  return (
    <EuiBreadcrumbs
      breadcrumbs={breadcrumbs}
      truncate={false}
    />
  )
}