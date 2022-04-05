import * as React from 'react'

import { ModalProps } from '@quick-change/core'

export function ModalAdapter({ title, open, onClose, children }: ModalProps) {
  return <>
    <div className="modal">
      <div className="modal-background" />
      <div className="modal-card">
        {children}
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button className="button">Cancel</button>
        </footer>
      </div>
    </div>
  </>
}

export function ModalHeaderAdapter({ title, close }) {
  return (
    <header className="modal-card-head">
      <p className="modal-card-title">{title}</p>
      <button className="delete" aria-label="close"></button>
    </header>
  )
}

export function ModalBodyAdapter({ children }) {
  return (
    <section className="modal-card-body">{ children }</section>
  )
}