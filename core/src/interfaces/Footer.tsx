import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  children: PropTypes.node
}

const defaultProps = {
  children: undefined
}

export type FooterProps = PropsType<typeof propTypes, typeof defaultProps>

export function Footer({ children }: FooterProps) {
  const { FooterAdapter } = useComponents()
  return <FooterAdapter>{children}</FooterAdapter>
}

Footer.propTypes = propTypes
Footer.defaultProps = defaultProps
