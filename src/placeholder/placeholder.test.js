import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { placeholder } from '..'

test('placeholder works!', () => {
  const Test = styled.div`
    ${placeholder`
      color: pink;
    `}
  `
  const tree = renderer.create(<Test />).toJSON()
  expect(tree).toMatchSnapshot()

  expect(tree).toHaveStyleRule('color', 'pink', {
    modifier: ':placeholder-shown'
  })

  expect(tree).toHaveStyleRule('color', 'pink', {
    modifier: '::-webkit-input-placeholder'
  })
})
