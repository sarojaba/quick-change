import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  href: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node
}

const defaultProps = {
  id: '',
  title: '',
  href: undefined,
  active: false,
  disabled: false,
  children: undefined
}

export type TabProps = PropsType<typeof propTypes, typeof defaultProps>

export function Tab({ id, title, href, active, disabled, children }: TabProps) {
  const { TabAdapter } = useComponents()

  return (
    <TabAdapter id={id} title={title} href={href} active={active} disabled={disabled}>
      {children}
    </TabAdapter>
  )
}

Tab.propTypes = propTypes
Tab.defaultProps = defaultProps

/**
 * Sub components
 */
import { TabGroup } from './TabGroup'

Tab.Group = TabGroup
