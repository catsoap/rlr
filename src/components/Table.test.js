import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Table from './Table';

describe('Table', () => {
  const now = Date.now() / 1000;
  const props = {
    list: [
      {
        title: '1',
        author: '1',
        num_comments: 1,
        points: 2,
        objectID: 'y',
        created_at_i: now,
      },
      {
        title: '2',
        author: '2',
        num_comments: 1,
        points: 2,
        objectID: 'z',
        created_at_i: now,
      },
    ],
    onDismiss: () => 'ok',
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table {...props} />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<Table {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows two items in list', () => {
    const element = shallow(<Table {...props} />);
    expect(element.find('section > :not(header)').length).toBe(3);
  });
});
