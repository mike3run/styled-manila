import { css } from 'styled-components'

const size = (width, height = width) => css`
  width: ${typeof width === 'number' ? width + 'px' : width};
  height: ${typeof height === 'number' ? height + 'px' : height};
`

export default size
