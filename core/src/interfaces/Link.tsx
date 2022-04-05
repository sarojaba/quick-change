import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  href: PropTypes.string,
  external: PropTypes.bool,
  children: PropTypes.node
}

const defaultProps = {
  href: '#',
  external: false,
  children: undefined
}

export type LinkProps = PropsType<typeof propTypes, typeof defaultProps>

export function Link({ href, external, children }: LinkProps) {
  const { LinkAdapter } = useComponents()
  return (
    <LinkAdapter
      href={href}
      external={external}
    >
      {children}
    </LinkAdapter>
  )
}

Link.propTypes = propTypes
Link.defaultProps = defaultProps
