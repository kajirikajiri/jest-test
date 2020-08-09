import React from 'react'
import {Board} from '../board'
import renderer from 'react-test-renderer'

test('Board class', ()=>{
  const component = renderer.create(
    <Board/>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})