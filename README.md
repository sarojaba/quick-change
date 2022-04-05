# Quick Change

All-in-one API for design systems

## Features

- Hot swap
- Easy to use
- Light weight
  - Small foot print (~12kB)

## Goal

- Less HTML/CSS

## Non-Goal

- Perfomance
- WAI-ARIA
- Production(DON'T TRY THIS AT OFFICE)

## Installation

코어 모듈과 원하는 디자인 시스템을 설치하세요.

```bash
npm install @quick-change/core
npm install @quick-change/antd @quick-change/bootstrap
```

### Usage

아래처럼 코드를 작성하세요.

```jsx
import { DesignSystemContext } from '@quick-change/core'

import * as Antd from '@quick-change/antd'
import * as Bootstrap from '@quick-change/bootstrap'

const catalog = {
  'Ant Design': Antd,
  'Bootstrap': Bootstrap
}

<DesignSystemContext catalog={catalog} name="Ant Design">
  <Button>Hello World!</Button>
</DesignSystemContext>
```

## Documentation

[Storybook](https://quick-change.netlify.app/)

## Build from source

### Prerequisites

- Node
- pnpm

```bash
npm install -g pnpm
```

### Setup

```bash
pnpm install
pnpm build
pnpm storybook
```

### Clean-up

```bash
pnpm clean
```

## Roadmap

### DONE

- Integrated API
- Hot swap

### TODO

- Lazy Loading
- A11Y
- Cross-Platform (Vue, Angular, Svelte, Solid)
- Transpiler
- Wireframe tool

## Related works

- [Drop-in switcher for previewing minimal CSS frameworks](https://dohliam.github.io/dropin-minimal-css)
- [The Component Gallery](https://component.gallery/)
- [Open UI](https://open-ui.org/)
- [Component Encyclopedia](https://storybook.js.org/showcase)
- [Component Driven User Interfaces](https://www.componentdriven.org/)

## License

MIT © [sarojaba](https://github.com/sarojaba)
