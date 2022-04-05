import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  value: PropTypes.any,
  selected: PropTypes.bool,
  children: PropTypes.string
}

const defaultProps = {
  value: undefined,
  selected: false,
  children: undefined
}

export type SelectItemProps = PropsType<typeof propTypes, typeof defaultProps>

export function SelectItem({ value, selected, children }: SelectItemProps) {
  const { SelectItemAdapter } = useComponents()

  return <SelectItemAdapter value={ value } selected={ selected }>
    { children }
  </SelectItemAdapter>
}

SelectItem.propTypes = propTypes
SelectItem.defaultProps = defaultProps
