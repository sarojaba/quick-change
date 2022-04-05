import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  children: PropTypes.node
}

const defaultProps = {
  children: undefined
}

export type CaptionProps = PropsType<typeof propTypes, typeof defaultProps>

export function Caption({ children }: CaptionProps) {
  const { CaptionAdapter } = useComponents()

  return (
    <CaptionAdapter>{children}</CaptionAdapter>
  )
}

Caption.propTypes = propTypes
Caption.defaultProps = defaultProps
