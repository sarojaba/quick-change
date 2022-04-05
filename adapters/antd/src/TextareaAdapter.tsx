import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import { Input } from 'antd'

export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <Input.TextArea rows={rows} />
  )
}