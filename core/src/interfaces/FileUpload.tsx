import * as React from 'react'

import { useComponents } from '../providers'

export interface FileUploadProps {
  disabled?: boolean,
  children?: any
}

export function FileUpload(props: FileUploadProps) {
  const { FileUploadAdapter } = useComponents()
  return <FileUploadAdapter {...props} />
}
