import React, { Fragment } from 'react'

import styled from 'styled-components'

export function StyleLoader({ theme, children }) {

  const Wrapper = styled.div`
    html, body, pre, code, kbd, samp {
      font-family: 'Odibee+Sans', sans-serif;
    }
  `

  return <>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://raw.githack.com/0xbsec/cyberstyle.css/master/dist/cyberstyle.min.css"
    />

    <Wrapper>{children}</Wrapper>
  </>
}