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

export type ParagraphProps = PropsType<typeof propTypes, typeof defaultProps>

export function Paragraph({ children }: ParagraphProps) {
  const { ParagraphAdapter } = useComponents()

  return (
    <ParagraphAdapter>{children}</ParagraphAdapter>
  )
}

Paragraph.propTypes = propTypes
Paragraph.defaultProps = defaultProps