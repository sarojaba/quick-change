import * as React from 'react'

import { ModalProps } from '@quick-change/core'

export function ModalAdapter({ title, open, onClose, children }: ModalProps) {
  return <>
    <div className="reveal" id="exampleModal1" data-reveal>
      <h1>{ title }</h1>
      <p>{ children }</p>
      <button className="close-button" data-close aria-label="Close modal" type="button">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </>
}