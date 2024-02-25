import * as React from 'react';//This line of code imports the entire React
import renderer from 'react-test-renderer';//This line of code imports a module named renderer from the 'react-test-renderer'

import { MonoText } from '../StyledText';//This line of code imports the MonoText

it(`renders correctly`, () => {//a test case using a testing framework like Jest and the react-test-renderer
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();//This line of code expects that the tree generated
});
