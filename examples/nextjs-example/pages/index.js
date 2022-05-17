import { DesignSystemProvider, Button } from '@quick-change/core'
import * as Bulma from '@quick-change/bulma-nextjs'

export default function Home() {
  const catalog = {
    'bulma': Bulma
  }

  return (
    <DesignSystemProvider catalog={catalog} name="bulma">
      <Button>Hello</Button>
    </DesignSystemProvider>
  )
}
