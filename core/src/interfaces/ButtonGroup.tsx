import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  vertical: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

const defaultProps = {
  vertical: false,
  children: []
}

export type ButtonGroupProps = PropsType<typeof propTypes, typeof defaultProps>

export function ButtonGroup(props: ButtonGroupProps) {
  const { ButtonGroupAdapter } = useComponents()
  return <ButtonGroupAdapter {...props} />
}

ButtonGroup.propTypes = propTypes
ButtonGroup.defaultProps = defaultProps
