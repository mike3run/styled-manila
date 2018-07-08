import { css } from 'styled-components'

/**
 * Normalize background properties useful when changing
 * background image via server side on the actual html markup
 * @returns {CSS}
 */
const stdBackground = css`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export default stdBackground
