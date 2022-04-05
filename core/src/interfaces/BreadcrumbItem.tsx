import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  href: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.string.isRequired
}

const defaultProps = {
  href: undefined,
  active: false,
  children: ''
}

export type BreadcrumbItemProps = PropsType<typeof propTypes, typeof defaultProps>

export function BreadcrumbItem({ href, active, children }: BreadcrumbItemProps) {
  const { BreadcrumbItemAdapter } = useComponents()
  return <BreadcrumbItemAdapter href={href} active={active}>{children}</BreadcrumbItemAdapter>
}

BreadcrumbItem.propTypes = propTypes
BreadcrumbItem.defaultProps = defaultProps
