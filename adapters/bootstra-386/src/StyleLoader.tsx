import React, { Fragment } from 'react'

export function StyleLoader({ theme, children }) {
  return <>
    <link
      rel="stylesheet"
      href="https://cdn.rawgit.com/kristopolous/BOOTSTRA.386/master/v4.4.1/dist/css/bootstrap.css"
    />

    {children}
  </>
}