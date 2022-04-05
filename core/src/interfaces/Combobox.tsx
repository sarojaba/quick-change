import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  label: PropTypes.string,
  value: PropTypes.node,
  children: PropTypes.node
}

const defaultProps = {
  label: undefined,
  value: undefined,
  children: undefined
}

export type ComboboxProps = PropsType<typeof propTypes, typeof defaultProps>

export function Combobox({ label, value, children }: ComboboxProps) {
  const { ComboboxAdapter } = useComponents()
  return (
    <ComboboxAdapter label={label} value={value}>
      {children}
    </ComboboxAdapter>
  )
}

Combobox.propTypes = propTypes
Combobox.defaultProps = defaultProps

/**
 * Sub components
 */
import { ComboboxItem } from './ComboboxItem'

Combobox.Item = ComboboxItem
