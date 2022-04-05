import * as React from 'react'

import { IconProps } from '@quick-change/core'

import ArrowUpIcon from '@atlaskit/icon/glyph/arrow-up'
import ArrowDownIcon from '@atlaskit/icon/glyph/arrow-down'
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left'
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right'
import HomeIcon from '@atlaskit/icon/glyph/home'
import EditorInfoIcon from '@atlaskit/icon/glyph/editor/info'
import EditorSuccessIcon from '@atlaskit/icon/glyph/editor/success'
import EditorWarningIcon from '@atlaskit/icon/glyph/editor/warning'
import EditorErrorIcon from '@atlaskit/icon/glyph/editor/error'

export function IconAdapter({ name, type, size }: IconProps) {
  const Icon = iconByName(name)

  return Icon
    ? <Icon
        size={size}
        primaryColor={colorByType(type)}
      />
    : `Not supported: ${name}`
}

function iconByName(name) {
  switch (name) {
    case 'arrow-up':
      return ArrowUpIcon
    case 'arrow-down':
      return ArrowDownIcon
    case 'arrow-left':
      return ArrowLeftIcon
    case 'arrow-right':
      return ArrowRightIcon
    case 'home':
      return HomeIcon
    case 'info':
      return EditorInfoIcon
    case 'success':
      return EditorSuccessIcon
    case 'warning':
      return EditorWarningIcon
    case 'danger':
      return EditorErrorIcon
    default:
      return null
  }
}

function colorByType(type) {
  // Ref. https://atlassian.design/foundations/color/
  switch (type) {
    case 'info':
      return '#00B8D9'
    case 'success':
      return '#36B37E'
    case 'warning':
      return '#FFAB00'
    case 'danger':
      return '#FF5630'
    default:
      return undefined
  }
}