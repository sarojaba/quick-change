import * as React from 'react'

import styled from 'styled-components'

import styles from 'milligram/dist/milligram.min.css'

export function StyleLoader({ theme, children }) {
  const Wrapper = styled.div`
    ${styles}
  `

  return (
    <Wrapper>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />

      {children}
    </Wrapper>
  )
}