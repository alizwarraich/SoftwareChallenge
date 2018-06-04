import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';

describe('(Component) Search', () => {
  it('should render successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});