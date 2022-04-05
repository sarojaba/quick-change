import * as React from 'react'

import { FileUploadProps } from '@quick-change/core'

import { FileUploader } from 'baseui/file-uploader'

export function FileUploadAdapter({ disabled, children }: FileUploadProps) {
  return <FileUploader disabled={disabled} />
}