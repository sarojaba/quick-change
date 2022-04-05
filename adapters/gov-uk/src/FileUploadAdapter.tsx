import * as React from 'react'

import { FileUploadProps } from '@quick-change/core'

import { FileUpload } from 'govuk-react'

export function FileUploadAdapter({ disabled, children }: FileUploadProps) {
  return (
    <FileUpload>{}</FileUpload>
  )
}