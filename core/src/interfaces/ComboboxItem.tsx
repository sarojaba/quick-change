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

export type ComboboxItemProps = PropsType<typeof propTypes, typeof defaultProps>

export function ComboboxItem({ children }: ComboboxItemProps) {
  const { ComboboxItemAdapter } = useComponents()
  return (
    <ComboboxItemAdapter>{children}</ComboboxItemAdapter>
  )
}

ComboboxItem.propTypes = propTypes
ComboboxItem.defaultProps = defaultProps
