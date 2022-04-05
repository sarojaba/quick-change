import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  href: PropTypes.string,
  children: PropTypes.node
}

const defaultProps = {
  href: undefined,
  
  children: undefined
}

export type DropdownItemProps = PropsType<typeof propTypes, typeof defaultProps>

export function DropdownItem({ href, children }: DropdownItemProps) {
  const { DropdownItemAdapter } = useComponents()
  return (
    <DropdownItemAdapter href={href}>
      {children}
    </DropdownItemAdapter>
  )
}

DropdownItem.propTypes = propTypes
DropdownItem.defaultProps = defaultProps
