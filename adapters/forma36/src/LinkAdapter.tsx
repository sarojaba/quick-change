import * as React from 'react'

import { LinkProps } from '@quick-change/core'

import { TextLink } from '@contentful/f36-components';

/**
 * @see https://f36.contentful.com/components/text-link
 */
export function LinkAdapter({ href, external, children }: LinkProps) {
  return (
    <TextLink
      href={href}
    >
      {children}
    </TextLink>
  )
}