import * as React from 'react'

import { useComponents } from '../providers'

export interface IconButtonProps {
  // icon: oneOf([
  //   'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right',
  //   'info', 'success', 'warning', 'danger',
  //   'home'
  // ]),
  icon: string,
  disabled: boolean
}

export function IconButton({ icon, disabled }: IconButtonProps) {
  const { IconButtonAdapter } = useComponents()
  return (
    <IconButtonAdapter icon={icon} disabled={disabled} />
  )
}
