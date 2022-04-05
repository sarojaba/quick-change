import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool
}

const defaultProps = {
  checked: false,
  disabled: false
}

export type ToggleProps = PropsType<typeof propTypes, typeof defaultProps>

export function Toggle({ checked, disabled }: ToggleProps) {
  const { ToggleAdapter } = useComponents()
  return (
    <ToggleAdapter
      checked={checked}
      disabled={disabled}
    />
  )
}

Toggle.propTypes = propTypes
Toggle.defaultProps = defaultProps