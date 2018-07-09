import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ieTarget } from '..'

test('ieTarget works!', () => {
  const Test = styled.div`
    ${ieTarget`
      text-decoration: underline;
    `}
  `
  const tree = renderer.create(<Test />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('text-decoration', 'underline', {
    media: 'all and (-ms-high-contrast:none),(-ms-high-contrast:active)'
  })
})
