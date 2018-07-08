import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import stdBackground from './stdBackground'

const Background = styled.div`
  ${stdBackground}
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

test('it works', () => {
  const tree = renderer.create(<Background />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('backgroundPosition', 'center')
  expect(tree).toHaveStyleRule('backgroundSize', 'cover')
  expect(tree).toHaveStyleRule('backgroundRepeat', 'no-repeat')
})
