import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node
}

const defaultProps = {
  disabled: false,
  children: undefined
}

export type FileUploadProps = PropsType<typeof propTypes, typeof defaultProps>

export function FileUpload(props: FileUploadProps) {
  const { FileUploadAdapter } = useComponents()
  return <FileUploadAdapter {...props} />
}

FileUpload.propTypes = propTypes
FileUpload.defaultProps = defaultProps
