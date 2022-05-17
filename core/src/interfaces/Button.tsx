import * as React from 'react'

import { useComponents } from '../providers'

export interface ButtonProps {
  icon?: string,
  // type: oneOf(['default', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'danger']),
  type?: any,
  // shape: oneOf(['fill', 'outline', 'clear']),
  shape?: any,
  // size: oneOf(['small', 'medium', 'large']),
  size?: any,
  value: string,
  disabled: boolean,
  block?: boolean,
  // onClick: func,
  onClick?: any,
  children: any
}

export function Button(props: ButtonProps) {
  const { ButtonAdapter } = useComponents()
  return <ButtonAdapter {...props} />
}

/**
 * Sub components
 */
import { ButtonGroup } from './ButtonGroup'

Button.Group = ButtonGroup
