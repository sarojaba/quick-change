import React, { Fragment } from 'react'

export function StyleLoader({ theme, children }) {
  return <>
    <link rel="stylesheet" href="https://unpkg.com/papercss@1.8.2/dist/paper.min.css" />

    { children }
  </>
}