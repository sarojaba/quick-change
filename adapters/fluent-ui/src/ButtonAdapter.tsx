import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

import { DefaultButton, PrimaryButton } from '@fluentui/react'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  const Button = shape === 'outline' ? DefaultButton : PrimaryButton

  return (
    <Button
      // iconProps={icon ? {iconName: icon} : undefined}
      text={children}
      onClick={onClick}
      disabled={disabled}
    />
  )
}
