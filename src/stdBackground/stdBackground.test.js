import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { stdBackground } from '..'

const Background = styled.div`
  ${stdBackground}
`

test('it works', () => {
  const tree = renderer.create(<Background />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('background-position', 'center')
  expect(tree).toHaveStyleRule('background-size', 'cover')
  expect(tree).toHaveStyleRule('background-repeat', 'no-repeat')
})
