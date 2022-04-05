import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.node,
  as: PropTypes.node,
  disabled: PropTypes.bool,
  children: PropTypes.node
}

const defaultProps = {
  href: undefined,
  label: undefined,
  icon: undefined,
  as: undefined,
  disabled: false,
  children: undefined
}

export type NavItemProps = PropsType<typeof propTypes, typeof defaultProps>

export function NavItem({ href, label, icon, as, disabled, children }: NavItemProps) {
  const { NavItemAdapter } = useComponents()
  return (
    <NavItemAdapter href={ href } label={label} icon={icon} as={as} disabled={disabled}>
      { children }
    </NavItemAdapter>
  )
}

NavItem.propTypes = propTypes
NavItem.defaultProps = defaultProps
