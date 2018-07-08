import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { resetBtn } from '..'

test('resetBtn works!', () => {
  const Test = styled.div`
    ${resetBtn}
  `
  const tree = renderer.create(<Test />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('appearance', 'none')
  expect(tree).toHaveStyleRule('border', 'none')
  expect(tree).toHaveStyleRule('border-radius', '0')
  expect(tree).toHaveStyleRule('background', 'none')
  expect(tree).toHaveStyleRule('margin', '0')
  expect(tree).toHaveStyleRule('padding', '0')
  expect(tree).toHaveStyleRule('font', 'inherit')
  expect(tree).toHaveStyleRule('line-height', 'inherit')
  expect(tree).toHaveStyleRule('color', 'inherit')
  expect(tree).toHaveStyleRule('cursor', 'pointer')
  expect(tree).toHaveStyleRule('outline', 'none')
})
