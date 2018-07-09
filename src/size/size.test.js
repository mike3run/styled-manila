import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { size } from '..'

test('size works with a number', () => {
  const Test = styled.div`
    ${size(20)}
  `

  const tree = renderer.create(<Test />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('width', '20px')
  expect(tree).toHaveStyleRule('height', '20px')
})

test('size works with a number', () => {
  const Test = styled.div`
    ${size(20, 45)}
  `

  const tree = renderer.create(<Test />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('width', '20px')
  expect(tree).toHaveStyleRule('height', '45px')
})

test('size works with a string', () => {
  const Test = styled.div`
    ${size('1em', '4.3em')}
  `

  const tree = renderer.create(<Test />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('width', '1em')
  expect(tree).toHaveStyleRule('height', '4.3em')
})
