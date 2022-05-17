import * as React from 'react'

import { useComponents } from '../providers'

export function Media({ children }: any) {
  const { Media: MediaInterface } = useComponents()
  return <MediaInterface>{children}</MediaInterface>
}

function MediaLeft({ children }: any) {
  const { MediaLeft: MediaLeftInterface } = useComponents()
  return <MediaLeftInterface>{children}</MediaLeftInterface>
}

function MediaContent({ children }: any) {
  const { MediaContent: MediaContentInterface } = useComponents()
  return <MediaContentInterface>{children}</MediaContentInterface>
}

function MediaRight({ children }: any) {
  const { MediaRight: MediaRightInterface } = useComponents()
  return <MediaRightInterface>{children}</MediaRightInterface>
}

Media.Left = MediaLeft
Media.Content = MediaContent
Media.Right = MediaRight