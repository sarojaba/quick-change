import React, { Fragment } from 'react'

export function StyleLoader({ theme, children }) {
  return <>
    <link
      rel="stylesheet"
      href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css"
    />

    { children }
  </>
}