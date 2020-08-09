import React from 'react'
import {Game} from '../index'
import renderer from 'react-test-renderer'

test('Game class', ()=>{
  const component = renderer.create(
    <Game/>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})