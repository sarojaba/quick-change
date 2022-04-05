import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func
}

const defaultProps = {
  value: '',
  placeholder: '',
  size: 'medium',
  disabled: false,
  readOnly: false,
  onChange: undefined,
  onKeyDown: undefined
}

export type NumberInputProps = PropsType<typeof propTypes, typeof defaultProps>

export function NumberInput({ value, placeholder, size, disabled, readOnly, onChange, onKeyDown }: NumberInputProps) {

  const { NumberInputAdapter } = useComponents()

  return (
    <NumberInputAdapter
      value={value}
      placeholder={placeholder}
      size={size}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}

NumberInput.propTypes = propTypes
NumberInput.defaultProps = defaultProps
