import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  active: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node
}

const defaultProps = {
  active: undefined,
  onChange: undefined,
  children: undefined
}

export type TabGroupProps = PropsType<typeof propTypes, typeof defaultProps>

export function TabGroup({ active, onChange, children }: TabGroupProps) {

  const { TabGroupAdapter } = useComponents()

  return (
    <TabGroupAdapter
      active={active}
      onChange={onChange}
    >
      {children}
    </TabGroupAdapter>
  )
}

TabGroup.propTypes = propTypes
TabGroup.defaultProps = defaultProps
