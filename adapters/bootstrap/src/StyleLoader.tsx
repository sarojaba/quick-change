import React, { Fragment } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

export function StyleLoader({ theme, children }) {
  return <>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
    />

    { children }
  </>
}