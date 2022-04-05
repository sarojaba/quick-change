import * as React from 'react'

export function ProgressAdapter({ value, max, label, size }) {
  return <progress value={value} max={max} />
}