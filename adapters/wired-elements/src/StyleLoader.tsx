import React, { Fragment } from 'react'

export function StyleLoader({ theme, children }) {
  return <>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Material+Icons&display=block"
    />

    {children}
  </>
}