import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SimplePerson from './Person/SimplePerson';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('SimplePerson renders correctly', () => {
  const tree = renderer.create(
    <SimplePerson name='lakshman' skill='web' />
  ).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
