import * as React from 'react'

import { FileUploadProps } from '@quick-change/core'

import { EuiFilePicker, useGeneratedHtmlId } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/forms/form-controls#file-picker
 */
export function FileUploadAdapter({ disabled, children }: FileUploadProps) {
  const filePickerId = useGeneratedHtmlId({ prefix: 'filePicker' })

  return (
    <EuiFilePicker
      id={filePickerId}
      disabled={disabled}
    />
  )
}