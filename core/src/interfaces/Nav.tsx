import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents, ScopeProvider } from '../providers'

import { NavItem } from './NavItem'

const propTypes = {
  children: PropTypes.node
}

const defaultProps = {
  children: undefined
}

export type NavProps = PropsType<typeof propTypes, typeof defaultProps>

export function Nav({ children }: NavProps) {
  const { NavAdapter } = useComponents()

  return (
    <NavAdapter>
      <ScopeProvider scope="nav">
        {children}
      </ScopeProvider>
    </NavAdapter>
  )
}

Nav.propTypes = propTypes
Nav.defaultProps = defaultProps

Nav.Item = NavItem