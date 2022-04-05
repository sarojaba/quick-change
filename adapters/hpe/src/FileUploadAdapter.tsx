import * as React from 'react'

import { FileUploadProps } from '@quick-change/core'

import { FileInput } from 'grommet'

export function FileUploadAdapter({ disabled, children }: FileUploadProps) {
  return (
    <FileInput
      messages={{
        dropPrompt: 'Drag and drop',
        browse: 'Select File',
      }}
      onChange={event => {
        const fileList = event.target.files;
        for (let i = 0; i < fileList.length; i += 1) {
          const file = fileList[i];
          console.log(file.name);
        }
      }}
    />
  )
}