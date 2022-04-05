import * as React from 'react'

export function ModalButton({ renderButton, renderModal }) {
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      {
        renderButton(() => setOpen(true))
      }
      {
        renderModal(open)
      }
    </React.Fragment>
  )
}