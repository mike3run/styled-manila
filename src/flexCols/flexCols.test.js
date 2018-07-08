import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { flexCols } from '..'

test('FlexCols with default base length', () => {
  const Test = styled.div`
    ${flexCols(6)}
  `
  const tree = renderer.create(<Test />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('flex-basis', '50%')
  expect(tree).toHaveStyleRule('max-width', '50%')
})

test('FlexCols with custom base length', () => {
  const Test = styled.div`
    ${flexCols(1, 4)}
  `
  const tree = renderer.create(<Test />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('flex-basis', '25%')
  expect(tree).toHaveStyleRule('max-width', '25%')
})
