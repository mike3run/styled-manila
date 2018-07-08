import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import align from './align'

const ExpectedDefaults = tree => {
  expect(tree).toHaveStyleRule('position', 'absolute')
  expect(tree).toHaveStyleRule('transform-style', 'preserve-3d')
}

test('Explicit Both Aligns Work!', () => {
  const Test = styled.div`
    ${align('both')}
  `
  const tree = renderer.create(<Test />).toJSON()
  expect(tree).toMatchSnapshot()
  ExpectedDefaults(tree)
  expect(tree).toHaveStyleRule('top', '50%')
  expect(tree).toHaveStyleRule('left', '50%')
  expect(tree).toHaveStyleRule('transform', 'translate(-50%,-50%)')
})

test('Implicit Both Aligns Work!', () => {
  const Test = styled.div`
    ${align()}
  `
  const tree = renderer.create(<Test />).toJSON()
  expect(tree).toMatchSnapshot()
  ExpectedDefaults(tree)
  expect(tree).toHaveStyleRule('top', '50%')
  expect(tree).toHaveStyleRule('left', '50%')
  expect(tree).toHaveStyleRule('transform', 'translate(-50%,-50%)')
})

test('Horizontal Aligns Work!', () => {
  const Test = styled.div`
    ${align('horizontal')}
  `
  const tree = renderer.create(<Test />).toJSON()
  expect(tree).toMatchSnapshot()
  ExpectedDefaults(tree)
  expect(tree).toHaveStyleRule('left', '50%')
  expect(tree).toHaveStyleRule('transform', 'translateX(-50%)')
})

test('Vertical Aligns Work!', () => {
  const Test = styled.div`
    ${align('vertical')}
  `
  const tree = renderer.create(<Test />).toJSON()
  expect(tree).toMatchSnapshot()
  ExpectedDefaults(tree)
  expect(tree).toHaveStyleRule('top', '50%')
  expect(tree).toHaveStyleRule('transform', 'translateY(-50%)')
})
