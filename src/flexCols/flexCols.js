import { css } from 'styled-components'

const makePercent = (num, base) => `${(num / base) * 100}%`

const flexCols = (num, base = 12) => css`
  max-width: ${makePercent(num, base)};
  flex-basis: ${makePercent(num, base)};
`

export default flexCols
