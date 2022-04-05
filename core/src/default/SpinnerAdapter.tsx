import * as React from 'react'

import { SpinnerProps } from '../interfaces'

import styled from 'styled-components'

/**
 * @see https://codepen.io/mandelid/pen/kNBYLJ
 */
export function SpinnerAdapter({ size }: SpinnerProps) {
  return styled.div`
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255,255,255,.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;

    @keyframes spin {
      to { -webkit-transform: rotate(360deg); }
    }
    @-webkit-keyframes spin {
      to { -webkit-transform: rotate(360deg); }
    }
  `
}