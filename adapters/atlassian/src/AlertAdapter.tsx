import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import Flag from '@atlaskit/flag'

import InfoIcon from '@atlaskit/icon/glyph/info'
import SuccessIcon from '@atlaskit/icon/glyph/check-circle'
import WarningIcon from '@atlaskit/icon/glyph/warning'
import ErrorIcon from '@atlaskit/icon/glyph/error'
import { N500, G400, Y200, R400 } from '@atlaskit/theme/colors'
import { token } from '@atlaskit/tokens'

/**
 * @see https://atlassian.design/components/flag
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Flag
      id=""
      appearance={appearanceByType(type)}
      icon={icon ? iconByType(type) : undefined}
      title={title}
      description={children}
    />
  )
}

function appearanceByType(type) {
  switch (type) {
    case 'info':
      return 'info'
    case 'success':
      return 'success'
    case 'warning':
      return 'warning'
    case 'danger':
      return 'error'
    default:
      return undefined
  }
}

function iconByType(type) {
  switch (type) {
    case 'info':
      return (
        <InfoIcon
          label={undefined}
          secondaryColor={token('color.iconBorder.discovery', N500)}
        />
      )
    case 'success':
      return (
        <SuccessIcon
          label={undefined}
          secondaryColor={token('color.iconBorder.success', G400)}
        />
      )
    case 'warning':
      return (
        <WarningIcon
          label={undefined}
          secondaryColor={token('color.iconBorder.warning', Y200)}
        />
      )
    case 'danger':
      return (
        <ErrorIcon
          label={undefined}
          secondaryColor={token('color.iconBorder.danger', R400)}
        />
      )
    default:
      return undefined
  }
}