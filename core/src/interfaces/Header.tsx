import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

const defaultProps = {
  title: '',
  children: undefined
}

export type HeaderProps = PropsType<typeof propTypes, typeof defaultProps>

export function Header({ title, children }: HeaderProps) {
  const { HeaderAdapter } = useComponents()
  return <HeaderAdapter title={title}>{children}</HeaderAdapter>
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps
