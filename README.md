# styled-manila

> Manila mixins for the component age

[![NPM](https://img.shields.io/npm/v/styled-manila.svg)](https://www.npmjs.com/package/styled-manila)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![CircleCI](https://circleci.com/gh/shelldandy/styled-manila.svg?style=svg)](https://circleci.com/gh/shelldandy/styled-manila)

## Install

```bash
npm install --save styled-manila
```

## Usage

Each mixin is fully tree shakeable to provide the best compiled results experience.

```jsx
import styled from 'styled-components'
import { stdBackground } from 'styled-manila'

const MyComponent = styled.div`
  ${stdBackground}
`
```

## License

MIT © [shelldandy](https://github.com/shelldandy)
