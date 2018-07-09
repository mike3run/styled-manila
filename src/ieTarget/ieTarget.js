import { css } from 'styled-components'

const ieTarget = (...args) => css`
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    ${css(...args)}
  }
`

export default ieTarget
