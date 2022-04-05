import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents, ScopeProvider } from '../providers'

const propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  multiple: PropTypes.bool,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  onValueChange: PropTypes.func,
  children: PropTypes.node
}

const defaultProps = {
  name: undefined,
  label: '',
  size: 'medium',
  multiple: false,
  rows: 5,
  disabled: false,
  value: undefined,
  onValueChange: undefined,
  children: undefined
}

export type SelectProps = PropsType<typeof propTypes, typeof defaultProps>

export function Select({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {

  const { SelectAdapter } = useComponents()
  
  return (
    <SelectAdapter
      name={name} label={label}
      size={ size } multiple={ multiple }
      rows = { rows } disabled={ disabled } value={ value }
      onValueChange={ onValueChange }
    >
      <ScopeProvider scope="select">
        {children}
      </ScopeProvider>
    </SelectAdapter>
  )
}

Select.propTypes = propTypes
Select.defaultProps = defaultProps

/**
 * Sub components
 */
import { SelectItem } from './SelectItem'

Select.Item = SelectItem
