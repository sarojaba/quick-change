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

export type DropdownProps = PropsType<typeof propTypes, typeof defaultProps>

export function Dropdown({ title, children }: DropdownProps) {
  const { DropdownAdapter } = useComponents()

  return <DropdownAdapter title={ title }>{children}</DropdownAdapter>
}

Dropdown.propTypes = propTypes
Dropdown.defaultProps = defaultProps

/**
 * Sub components
 */
import { DropdownItem } from './DropdownItem'

Dropdown.Item = DropdownItem
