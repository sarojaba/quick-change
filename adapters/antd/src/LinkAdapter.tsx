import * as React from 'react'

import { LinkProps } from '@quick-change/core'

import { Anchor } from 'antd'

/**
 * @see https://ant.design/components/anchor/
 * @param {*} param0 
 * @returns 
 */
export function LinkAdapter({ href, external, children }: LinkProps) {
  const { Link } = Anchor

  return (
    <Anchor>
      <Link href={href} title={children} />
    </Anchor>
  )
}