import { css } from 'styled-components'

const horizontalAlignment = css`
  left: 50%;
  transform: translateX(-50%);
`

const verticalAlignment = css`
  top: 50%;
  transform: translateY(-50%);
`

const bothAlignments = css`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

/**
 * Center an element on either or both axis
 * @param {string} direction
 * @returns {string}
 */
const align = direction => {
  const horizontal = direction === 'horizontal'
  const vertical = direction === 'vertical'
  const both = direction === 'both'

  let alignmentNeeded = bothAlignments

  if (both) alignmentNeeded = bothAlignments
  if (horizontal) alignmentNeeded = horizontalAlignment
  if (vertical) alignmentNeeded = verticalAlignment

  return css`
    position: absolute;
    transform-style: preserve-3d;
    ${alignmentNeeded}
  `
}

export default align
