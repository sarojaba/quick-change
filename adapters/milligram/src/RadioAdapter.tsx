import React, { Fragment } from 'react'

import { RadioProps } from '@quick-change/core'

export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return <>
    <input id={value} name={name} type="checkbox" />
    <label className="label-inline">{label}</label>
  </>
}