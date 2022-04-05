import * as React from 'react'

import { IconProps } from '@quick-change/core'

import { Icon } from 'doodlin-design-system'

/**
 * @see https://design.doodlin.co.kr/?path=/story/component-icon--default
 */
export function IconAdapter({ name, type, size }: IconProps) {
  return iconByName(name)
}

function iconByName(name) {
  switch (name) {
    case 'arrow-up':
      return <Icon.Arrow variant="arrow" rotate={90} />
    case 'arrow-down':
      return <Icon.Arrow variant="arrow" rotate={270} />
    case 'arrow-left':
      return <Icon.Arrow variant="arrow" rotate={0} />
    case 'arrow-right':
      return <Icon.Arrow variant="arrow" rotate={180} />
    case 'home':
      return null
    case 'info':
      return <Icon.InfoMark variant="solid" />
    case 'success':
      return <Icon.Check variant="circle" />
    case 'warning':
      return <Icon.Error variant="triangle" />
    case 'danger':
      return <Icon.Error variant="circle" />
    default:
      // return `Not supported: ${name}`
      return null
  }
}