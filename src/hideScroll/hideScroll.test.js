import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { hideScroll } from '..'

test('hideScroll works!', () => {
  const Test = styled.div`
    ${hideScroll}
  `
  const tree = renderer.create(<Test />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('display', 'none', {
    modifier: '::-webkit-scrollbar'
  })
})
