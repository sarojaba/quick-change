import * as React from 'react'

import { SliderProps } from '@quick-change/core'

import { EuiRange, useGeneratedHtmlId } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/forms/range-sliders
 */
export function SliderAdapter({ min, max, value, disabled, onChange }: SliderProps) {
  const basicRangeId = useGeneratedHtmlId({ prefix: 'basicRange' });

  return (
    <EuiRange
      id={basicRangeId}
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      showLabels
    />
  )
}