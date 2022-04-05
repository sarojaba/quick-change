import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  label: PropTypes.string,
  inline: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
  onChange: PropTypes.func
}

const defaultProps = {
  label: undefined,
  inline: false,
  children: [],
  onChange: () => {}
}

export type CheckboxGroupProps = PropsType<typeof propTypes, typeof defaultProps>

export function CheckboxGroup({ label, inline, children, onChange }: CheckboxGroupProps) {
  const { CheckboxGroupAdapter } = useComponents()
  return (
    <CheckboxGroupAdapter label={label} inline={inline} onChange={onChange}>
      {children}
    </CheckboxGroupAdapter>
  )
}

CheckboxGroup.propTypes = propTypes
CheckboxGroup.defaultProps = defaultProps
