import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'danger']),
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  children: PropTypes.node
}

const defaultProps = {
  type: 'primary',
  onClick: undefined,
  onClose: undefined,
  children: undefined
}

export type TagProps = PropsType<typeof propTypes, typeof defaultProps>

export function Tag(props: TagProps) {
  const { TagAdapter } = useComponents()
  return <TagAdapter {...props} />
}

Tag.propTypes = propTypes
Tag.defaultProps = defaultProps
