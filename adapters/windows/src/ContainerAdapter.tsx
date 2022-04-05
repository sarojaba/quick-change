import React, { Fragment } from 'react'

import { ContainerProps } from '@quick-change/core'

export function ContainerAdapter({ breakpoint, align, children }: ContainerProps) {
  return <>
    <div className="window glass">
      <div className="title-bar">
        <div className="title-bar-text"></div>
        <div className="title-bar-controls">
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body grid">{ children }</div>
    </div>

    <style jsx>{`
      .grid {
        display: grid;
        grid-template-columns: 0.25fr 1fr;
        grid-gap: 10px;
      }
    `}</style>
  </>
}