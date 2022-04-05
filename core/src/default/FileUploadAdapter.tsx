import * as React from 'react'

import { FileUploadProps } from '../interfaces'

/**
 * @see 
 */
export function FileUploadAdapter({ disabled, children }: FileUploadProps) {
  return (
    <div>{children}</div>
  )
}