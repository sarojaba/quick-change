import * as React from 'react'

import { ProgressProps } from '@quick-change/core'

/**
 * @see https://momentum.design/components/progress
 */
export function ProgressAdapter({ type, value, max, label, size }: ProgressProps) {
  return (
    <span>
      {
        label
          ? <div className="progressbar-info">
              <span className="progressbar-label">ProgressBar</span>
              <span className="progressbar-progress">{value} / {max}</span>
            </div>
          : null
      }

      <div className="progress">
        <span
          className="meter"
          role="progressbar"
          aria-labelledby="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-valuetext={`${value}%`}
          style={{width: `${value}%`}}
        />
      </div>
    </span>
  )
}